
import React from 'react';
import { format } from 'date-fns';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type ContactSubmission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
};

interface ContactSubmissionDetailProps {
  submission: ContactSubmission | null;
  onClose: () => void;
  onStatusChange: (id: string, status: 'new' | 'in-progress' | 'completed') => Promise<void>;
}

const ContactSubmissionDetail: React.FC<ContactSubmissionDetailProps> = ({ 
  submission, 
  onClose, 
  onStatusChange 
}) => {
  if (!submission) return null;

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

  return (
    <Dialog open={!!submission} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Contact Submission</DialogTitle>
          <DialogDescription>
            Received on {format(new Date(submission.created_at), 'MMMM d, yyyy, h:mm a')}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Status</p>
            <div>{getStatusBadge(submission.status)}</div>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Name</p>
            <p>{submission.name}</p>
          </div>
          
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Email</p>
            <a href={`mailto:${submission.email}`} className="text-brandcentral-accent hover:underline">
              {submission.email}
            </a>
          </div>
          
          {submission.company && (
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">Company</p>
              <p>{submission.company}</p>
            </div>
          )}
          
          <div>
            <p className="text-sm font-medium text-gray-500 mb-1">Message</p>
            <div className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">
              {submission.message}
            </div>
          </div>
          
          <div className="pt-4">
            <p className="text-sm font-medium text-gray-500 mb-2">Update Status</p>
            <Select
              value={submission.status}
              onValueChange={(value) => {
                onStatusChange(submission.id, value as 'new' | 'in-progress' | 'completed');
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
  );
};

export default ContactSubmissionDetail;
