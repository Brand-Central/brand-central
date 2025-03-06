
export type ContactSubmission = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
};
