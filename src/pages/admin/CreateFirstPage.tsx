
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/contexts/AuthContext';

const CreateFirstPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  
  const createSamplePage = useMutation({
    mutationFn: async () => {
      const samplePage = {
        title: "Welcome to Our Website",
        slug: "welcome",
        meta_description: "Welcome to our website. Learn more about our services and how we can help you.",
        content: { 
          html: `<h2>Welcome to Our Website</h2>
                <p>This is a sample page created from our CMS. You can edit this content or create new pages using the admin dashboard.</p>
                <h3>What We Offer</h3>
                <ul>
                  <li>Professional web design</li>
                  <li>Content management</li>
                  <li>Digital marketing</li>
                  <li>Branding solutions</li>
                </ul>
                <p>Contact us today to learn more about how we can help your business grow online.</p>`
        },
        is_published: true,
        author_id: user?.id,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('pages')
        .insert([samplePage])
        .select()
        .single();
        
      if (error) throw error;
      return data;
    },
    onSuccess: (data) => {
      toast({
        title: "Sample page created",
        description: "A welcome page has been created. You can now edit it or create more pages.",
      });
      navigate(`/admin/pages/edit/${data.id}`);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: `Failed to create sample page: ${error.message}`,
        variant: "destructive",
      });
    },
  });
  
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl font-bold mb-4">Create Your First Page</h2>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        Start by creating a sample welcome page that you can edit to your liking,
        or create a new page from scratch.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={() => createSamplePage.mutate()}
          className="bg-brandcentral-accent hover:bg-brandcentral-accent/90"
          disabled={createSamplePage.isPending}
        >
          {createSamplePage.isPending ? 'Creating...' : 'Create Sample Page'}
        </Button>
        <Button 
          variant="outline" 
          onClick={() => navigate('/admin/pages/new')}
        >
          Start From Scratch
        </Button>
      </div>
    </div>
  );
};

export default CreateFirstPage;
