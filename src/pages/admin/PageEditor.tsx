
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { format } from 'date-fns';
import { PageContent } from '@/types/sections';

// Refactored components
import PageEditorHeader from '@/components/admin/page-editor/PageEditorHeader';
import PageMetadataForm from '@/components/admin/page-editor/PageMetadataForm';
import PageContentEditor from '@/components/admin/page-editor/PageContentEditor';
import PageSettings from '@/components/admin/page-editor/PageSettings';
import PagePreview from '@/components/admin/page-editor/PagePreview';

const PageEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const isEditMode = id !== undefined && id !== 'new';

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [content, setContent] = useState<PageContent>({ html: '' });
  const [isPublished, setIsPublished] = useState(false);
  const [initialSlug, setInitialSlug] = useState('');
  const [currentTab, setCurrentTab] = useState('edit');
  const [editorMode, setEditorMode] = useState<'visual' | 'code'>('visual');

  // Fetch page data if in edit mode
  const { data: pageData, isLoading } = useQuery({
    queryKey: ['page', id],
    queryFn: async () => {
      if (!isEditMode || !id) return null;
      
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) {
        console.error('Error fetching page:', error);
        toast({
          title: "Error",
          description: `Failed to load page: ${error.message}`,
          variant: "destructive",
        });
        throw error;
      }
      
      return data;
    },
    enabled: isEditMode && Boolean(id),
  });

  // Set form values when page data is loaded
  useEffect(() => {
    if (pageData) {
      setTitle(pageData.title || '');
      setSlug(pageData.slug || '');
      setInitialSlug(pageData.slug || '');
      setMetaDescription(pageData.meta_description || '');
      
      // Handle content based on the format in the database
      const pageContent: PageContent = pageData.content || { html: '' };
      setContent(pageContent);
      
      setIsPublished(pageData.is_published || false);
    }
  }, [pageData]);

  // Update slug when title changes (only in create mode)
  useEffect(() => {
    if (!isEditMode && title) {
      setSlug(title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-')
      );
    }
  }, [title, isEditMode]);

  // Save page mutation
  const saveMutation = useMutation({
    mutationFn: async () => {
      const pageData = {
        title,
        slug,
        meta_description: metaDescription,
        content: content,
        is_published: isPublished,
        author_id: user?.id,
        updated_at: new Date().toISOString()
      };
      
      if (isEditMode && id) {
        const { data, error } = await supabase
          .from('pages')
          .update(pageData)
          .eq('id', id)
          .select()
          .single();
          
        if (error) {
          console.error('Error updating page:', error);
          throw error;
        }
        return data;
      } else {
        const { data, error } = await supabase
          .from('pages')
          .insert([{...pageData, created_at: new Date().toISOString()}])
          .select()
          .single();
          
        if (error) {
          console.error('Error creating page:', error);
          throw error;
        }
        return data;
      }
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
      if (id) queryClient.invalidateQueries({ queryKey: ['page', id] });
      queryClient.invalidateQueries({ queryKey: ['page-content', slug] });
      
      toast({
        title: isEditMode ? "Page updated" : "Page created",
        description: isEditMode 
          ? "Your changes have been saved successfully." 
          : "The new page has been created successfully.",
      });
      
      if (!isEditMode && data?.id) {
        navigate(`/admin/pages/edit/${data.id}`);
      }
    },
    onError: (error: any) => {
      console.error('Error saving page:', error);
      toast({
        title: "Error",
        description: `Failed to save page: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  // Delete page mutation
  const deleteMutation = useMutation({
    mutationFn: async () => {
      if (!isEditMode || !id) return;
      
      const { error } = await supabase
        .from('pages')
        .delete()
        .eq('id', id);
        
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
      
      toast({
        title: "Page deleted",
        description: "The page has been successfully deleted.",
      });
      
      navigate('/admin/pages');
    },
    onError: (error: any) => {
      console.error('Error deleting page:', error);
      toast({
        title: "Error",
        description: `Failed to delete page: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const handleSave = async () => {
    if (!title) {
      toast({
        title: "Missing title",
        description: "Please enter a title for the page.",
        variant: "destructive",
      });
      return;
    }
    
    if (!slug) {
      toast({
        title: "Missing slug",
        description: "Please enter a URL slug for the page.",
        variant: "destructive",
      });
      return;
    }

    saveMutation.mutate();
  };

  const handleContentChange = (newContent: string | PageContent) => {
    if (typeof newContent === 'string') {
      // If it's from the code editor, just update the HTML content
      setContent({ ...content, html: newContent });
    } else {
      // If it's from the section editor, update the entire content object
      setContent(newContent);
    }
  };

  if (isLoading && isEditMode) {
    return (
      <div className="flex justify-center py-8">
        <div className="animate-spin h-8 w-8 border-4 border-brandcentral-accent/20 border-t-brandcentral-accent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageEditorHeader 
        slug={slug} 
        isEditMode={isEditMode} 
        onSave={handleSave} 
        isSaving={saveMutation.isPending} 
      />
      
      <Tabs value={currentTab} onValueChange={setCurrentTab} className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="preview">Preview</TabsTrigger>
          </TabsList>
          
          {isEditMode && pageData && (
            <div className="flex items-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              Last updated: {format(new Date(pageData.updated_at), 'MMM d, yyyy h:mm a')}
            </div>
          )}
        </div>
        
        <TabsContent value="edit" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <PageMetadataForm 
                title={title}
                setTitle={setTitle}
                slug={slug}
                setSlug={setSlug}
              />
              
              <PageContentEditor 
                content={content}
                onChange={handleContentChange}
                editorMode={editorMode}
                setEditorMode={setEditorMode}
              />
            </div>
            
            <div className="space-y-6">
              <PageSettings 
                isPublished={isPublished}
                setIsPublished={setIsPublished}
                metaDescription={metaDescription}
                setMetaDescription={setMetaDescription}
                isEditMode={isEditMode}
                onDelete={() => deleteMutation.mutate()}
              />
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preview">
          <PagePreview title={title} content={content} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PageEditor;
