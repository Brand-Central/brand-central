
import React from 'react';
import { format } from 'date-fns';
import { 
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow 
} from '@/components/ui/table';
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

interface ContactSubmissionsTableProps {
  submissions: ContactSubmission[];
  onViewSubmission: (submission: ContactSubmission) => void;
  onStatusChange: (id: string, status: 'new' | 'in-progress' | 'completed') => Promise<void>;
}

const ContactSubmissionsTable: React.FC<ContactSubmissionsTableProps> = ({ 
  submissions, 
  onViewSubmission, 
  onStatusChange 
}) => {
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
                    onClick={() => onViewSubmission(submission)}
                    className="text-sm text-brandcentral-accent hover:underline"
                  >
                    View
                  </button>
                  <Select
                    value={submission.status}
                    onValueChange={(value) => {
                      onStatusChange(submission.id, value as 'new' | 'in-progress' | 'completed');
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
  );
};

export default ContactSubmissionsTable;
