
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';

type ContactSubmission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
};

const ContactSubmissions = () => {
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  
  const { data: submissions, isLoading, error, refetch } = useQuery({
    queryKey: ['contact-submissions'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as ContactSubmission[];
    }
  });

  const updateStatus = async (id: string, status: 'new' | 'in-progress' | 'completed') => {
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({ status })
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: 'Status updated',
        description: 'The submission status has been updated successfully.',
      });
      
      refetch();
    } catch (err) {
      console.error('Error updating status:', err);
      toast({
        title: 'Update failed',
        description: 'There was an error updating the status.',
        variant: 'destructive',
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">New</Badge>;
      case 'in-progress':
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">In Progress</Badge>;
      case 'completed':
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Completed</Badge>;
      default:
        return <Badge variant="outline">Unknown</Badge>;
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brandcentral-accent"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-md">
          Error loading submissions. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Contact Submissions</h1>
      
      {submissions && submissions.length > 0 ? (
        <div className="bg-white rounded-md shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {submissions.map((submission) => (
                <TableRow key={submission.id}>
                  <TableCell>{format(new Date(submission.created_at), 'MMM d, yyyy')}</TableCell>
                  <TableCell>{submission.name}</TableCell>
                  <TableCell>
                    <a href={`mailto:${submission.email}`} className="text-brandcentral-accent hover:underline">
                      {submission.email}
                    </a>
                  </TableCell>
                  <TableCell>{submission.company || '-'}</TableCell>
                  <TableCell>{getStatusBadge(submission.status)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setSelectedSubmission(submission)}
                        className="text-sm text-brandcentral-accent hover:underline"
                      >
                        View
                      </button>
                      <Select
                        value={submission.status}
                        onValueChange={(value) => {
                          updateStatus(submission.id, value as 'new' | 'in-progress' | 'completed');
                        }}
                      >
                        <SelectTrigger className="w-[120px] h-8 text-xs">
                          <SelectValue placeholder="Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="in-progress">In Progress</SelectItem>
                          <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="bg-gray-50 border border-gray-200 p-8 rounded-md text-center">
          <p className="text-gray-500">No contact submissions yet.</p>
        </div>
      )}

      {/* Detail Dialog */}
      {selectedSubmission && (
        <Dialog open={!!selectedSubmission} onOpenChange={(open) => !open && setSelectedSubmission(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Contact Submission</DialogTitle>
              <DialogDescription>
                Received on {format(new Date(selectedSubmission.created_at), 'MMMM d, yyyy, h:mm a')}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4 mt-4">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Status</p>
                <div>{getStatusBadge(selectedSubmission.status)}</div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Name</p>
                <p>{selectedSubmission.name}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
                <a href={`mailto:${selectedSubmission.email}`} className="text-brandcentral-accent hover:underline">
                  {selectedSubmission.email}
                </a>
              </div>
              
              {selectedSubmission.company && (
                <div>
                  <p className="text-sm font-medium text-gray-500 mb-1">Company</p>
                  <p>{selectedSubmission.company}</p>
                </div>
              )}
              
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">Message</p>
                <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
                  {selectedSubmission.message}
                </div>
              </div>
              
              <div className="pt-4">
                <p className="text-sm font-medium text-gray-500 mb-2">Update Status</p>
                <Select
                  value={selectedSubmission.status}
                  onValueChange={(value) => {
                    updateStatus(selectedSubmission.id, value as 'new' | 'in-progress' | 'completed');
                    setSelectedSubmission({
                      ...selectedSubmission,
                      status: value as 'new' | 'in-progress' | 'completed'
                    });
                  }}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default ContactSubmissions;
