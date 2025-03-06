import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Plus, Search, MoreHorizontal, Edit, Eye, Trash, FileText } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import ImportPagesButton from '@/components/admin/ImportPagesButton';

const Pages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch pages from Supabase
  const { data: pages, isLoading, error } = useQuery({
    queryKey: ['pages'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .order('updated_at', { ascending: false });
      
      if (error) {
        toast({
          title: "Error loading pages",
          description: error.message,
          variant: "destructive"
        });
        throw new Error(error.message);
      }
      
      return data || [];
    },
  });

  // Delete page mutation
  const deletePageMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('pages')
        .delete()
        .eq('id', id);
      
      if (error) {
        throw new Error(error.message);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pages'] });
      toast({
        title: "Page deleted",
        description: "The page has been successfully deleted.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: `Failed to delete page: ${error.message}`,
        variant: "destructive",
      });
    },
  });

  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this page? This action cannot be undone.")) {
      deletePageMutation.mutate(id);
    }
  };

  const filteredPages = pages?.filter(page => 
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (page.is_published ? 'published' : 'draft').includes(searchTerm.toLowerCase())
  ) || [];

  if (error) {
    console.error("Error loading pages:", error);
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Pages</h2>
        <div className="flex gap-2">
          <ImportPagesButton />
          <Link to="/admin/pages/new">
            <Button className="bg-brandcentral-accent hover:bg-brandcentral-accent/90">
              <Plus className="h-4 w-4 mr-2" />
              New Page
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex items-center space-x-2 border rounded-md p-2">
        <Search className="h-4 w-4 text-gray-400" />
        <Input 
          type="text" 
          placeholder="Search pages..." 
          className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {isLoading ? (
        <div className="flex justify-center py-8">
          <div className="animate-spin h-8 w-8 border-4 border-brandcentral-accent/20 border-t-brandcentral-accent rounded-full"></div>
        </div>
      ) : filteredPages.length > 0 ? (
        <div className="border rounded-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>URL</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead className="w-20">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPages.map(page => (
                <TableRow key={page.id}>
                  <TableCell className="font-medium">{page.title}</TableCell>
                  <TableCell className="text-sm text-gray-500">/{page.slug}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      page.is_published ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {page.is_published ? 'Published' : 'Draft'}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {new Date(page.updated_at).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Open menu</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link to={`/admin/pages/edit/${page.id}`} className="flex items-center cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <a href={`/${page.slug}`} target="_blank" rel="noreferrer" className="flex items-center cursor-pointer">
                            <Eye className="h-4 w-4 mr-2" />
                            View
                          </a>
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleDelete(page.id)} className="text-red-600 focus:bg-red-50 focus:text-red-700">
                          <Trash className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center border rounded-md p-8 text-center">
          <FileText className="h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">No pages found</h3>
          <p className="text-gray-500 mb-4">
            {searchTerm ? `No results for "${searchTerm}"` : "You haven't created any pages yet."}
          </p>
          {!searchTerm && (
            <Link to="/admin/pages/new">
              <Button className="bg-brandcentral-accent hover:bg-brandcentral-accent/90">
                <Plus className="h-4 w-4 mr-2" />
                Create your first page
              </Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Pages;
