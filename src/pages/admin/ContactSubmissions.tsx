
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';
import ContactSubmissionsTable from '@/components/admin/contacts/ContactSubmissionsTable';
import ContactSubmissionDetail from '@/components/admin/contacts/ContactSubmissionDetail';
import { ContactSubmission } from '@/components/admin/contacts/contactUtils';

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
        <ContactSubmissionsTable 
          submissions={submissions} 
          onViewSubmission={setSelectedSubmission}
          onStatusChange={updateStatus}
        />
      ) : (
        <div className="bg-gray-50 border border-gray-200 p-8 rounded-md text-center">
          <p className="text-gray-500">No contact submissions yet.</p>
        </div>
      )}

      <ContactSubmissionDetail 
        submission={selectedSubmission}
        onClose={() => setSelectedSubmission(null)}
        onStatusChange={async (id, status) => {
          await updateStatus(id, status);
          if (selectedSubmission) {
            setSelectedSubmission({
              ...selectedSubmission,
              status
            });
          }
        }}
      />
    </div>
  );
};

export default ContactSubmissions;
