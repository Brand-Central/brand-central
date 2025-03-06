
import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

// These environment variables must be set in your Supabase project
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oesqovainsntvqpwqirm.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9lc3FvdmFpbnNudHZxcHdxaXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyOTkzMDIsImV4cCI6MjA1Njg3NTMwMn0.ZIuKMWmKhLfvcOljnILmaOq63tVpBvetRciBRIIHBl8';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
