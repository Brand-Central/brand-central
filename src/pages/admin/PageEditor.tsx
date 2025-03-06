
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  ArrowLeft, 
  Save, 
  Eye, 
  Clock, 
  AlertTriangle,
  Trash,
  Copy
} from 'lucide-react';
import Editor from '@/components/admin/Editor';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { useAuth } from '@/contexts/AuthContext';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { format } from 'date-fns';

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
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [initialSlug, setInitialSlug] = useState('');
  const [currentTab, setCurrentTab] = useState('edit');
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

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
      setContent(pageData.content?.html || '');
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
        content: { html: content },
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

  const handleDelete = () => {
    deleteMutation.mutate();
    setShowDeleteDialog(false);
  };

  const handleCopySlug = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
    toast({
      title: "URL copied",
      description: "The page URL has been copied to your clipboard.",
    });
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
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={() => navigate('/admin/pages')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Pages
        </Button>
        
        <div className="flex gap-2">
          {isEditMode && (
            <Button variant="outline" asChild>
              <a href={`/${slug}`} target="_blank" rel="noreferrer">
                <Eye className="h-4 w-4 mr-2" />
                Preview
              </a>
            </Button>
          )}
          
          <Button 
            className="bg-brandcentral-accent hover:bg-brandcentral-accent/90"
            onClick={handleSave}
            disabled={saveMutation.isPending}
          >
            <Save className="h-4 w-4 mr-2" />
            {saveMutation.isPending ? 'Saving...' : 'Save Page'}
          </Button>
        </div>
      </div>
      
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
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Page Title</Label>
                      <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter page title"
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="slug">URL Slug</Label>
                      <div className="flex items-center mt-1">
                        <span className="text-gray-500 mr-1">/</span>
                        <Input
                          id="slug"
                          value={slug}
                          onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''))}
                          placeholder="page-url-slug"
                        />
                        <Button 
                          type="button" 
                          size="icon" 
                          variant="ghost" 
                          className="ml-2" 
                          onClick={handleCopySlug}
                          title="Copy full URL"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <Label className="mb-2 block">Page Content</Label>
                  <Editor
                    initialValue={content}
                    onChange={(newContent) => setContent(newContent)}
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-medium mb-4">Page Settings</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label htmlFor="published">Published</Label>
                        <p className="text-sm text-gray-500">Make this page visible to the public</p>
                      </div>
                      <Switch
                        id="published"
                        checked={isPublished}
                        onCheckedChange={setIsPublished}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="meta-description">Meta Description</Label>
                      <p className="text-sm text-gray-500 mb-2">Brief description for search engines</p>
                      <Textarea
                        id="meta-description"
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                        placeholder="Enter meta description"
                        className="h-24"
                      />
                      {metaDescription && metaDescription.length > 160 && (
                        <p className="mt-1 text-sm text-amber-600 flex items-center">
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          Meta descriptions should be 160 characters or less
                        </p>
                      )}
                    </div>
                    
                    {isEditMode && (
                      <div className="pt-4 border-t">
                        <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                          <DialogTrigger asChild>
                            <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                              <Trash className="h-4 w-4 mr-2" />
                              Delete Page
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Delete Page</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete this page? This action cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                              </DialogClose>
                              <Button variant="destructive" onClick={handleDelete}>
                                Delete
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="preview">
          <Card>
            <CardContent className="p-6">
              <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">{title || 'Untitled Page'}</h1>
                
                {content ? (
                  <div 
                    className="prose max-w-none border-t pt-4"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                ) : (
                  <div className="text-gray-500 italic border-t pt-4">
                    No content yet. Start editing to see a preview.
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PageEditor;
