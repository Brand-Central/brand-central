
-- Create the contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (optional, but recommended)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy to allow anyone to insert contact submissions (public contact form)
CREATE POLICY "Anyone can submit contact forms" 
  ON public.contact_submissions 
  FOR INSERT 
  TO public
  WITH CHECK (true);

-- Create a policy to allow authenticated users to view all submissions (for admin access)
CREATE POLICY "Authenticated users can view contact submissions" 
  ON public.contact_submissions 
  FOR SELECT 
  TO authenticated 
  USING (true);
