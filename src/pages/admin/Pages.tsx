
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

// Mock data - would be fetched from Supabase in a real application
const mockPages = [
  { id: 1, title: 'Home', slug: '/', status: 'Published', lastUpdated: '2023-06-15' },
  { id: 2, title: 'About Us', slug: '/about', status: 'Published', lastUpdated: '2023-06-10' },
  { id: 3, title: 'Services', slug: '/services', status: 'Published', lastUpdated: '2023-06-08' },
  { id: 4, title: 'Contact', slug: '/contact', status: 'Published', lastUpdated: '2023-06-05' },
  { id: 5, title: 'Blog Post 1', slug: '/blog/post-1', status: 'Draft', lastUpdated: '2023-06-01' },
  { id: 6, title: 'Case Studies', slug: '/case-studies', status: 'Published', lastUpdated: '2023-05-28' },
];

const Pages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [pages, setPages] = useState(mockPages);

  const filteredPages = pages.filter(page => 
    page.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchTerm.toLowerCase()) ||
    page.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: number) => {
    // In a real app, this would call Supabase to delete the page
    setPages(pages.filter(page => page.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Pages</h2>
        <Link to="/admin/pages/new">
          <Button className="bg-brandcentral-accent hover:bg-brandcentral-accent/90">
            <Plus className="h-4 w-4 mr-2" />
            New Page
          </Button>
        </Link>
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

      {filteredPages.length > 0 ? (
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
                  <TableCell className="text-sm text-gray-500">{page.slug}</TableCell>
                  <TableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      page.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {page.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">{page.lastUpdated}</TableCell>
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
                          <a href={page.slug} target="_blank" rel="noreferrer" className="flex items-center cursor-pointer">
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
