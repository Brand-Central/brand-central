
export interface Database {
  public: {
    Tables: {
      pages: {
        Row: {
          id: string;
          title: string;
          slug: string;
          content: Record<string, any>;
          meta_description: string | null;
          is_published: boolean;
          created_at: string;
          updated_at: string;
          author_id: string | null;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          content?: Record<string, any>;
          meta_description?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
          author_id?: string | null;
        };
        Update: {
          id?: string;
          title?: string;
          slug?: string;
          content?: Record<string, any>;
          meta_description?: string | null;
          is_published?: boolean;
          created_at?: string;
          updated_at?: string;
          author_id?: string | null;
        };
      };
      subscribers: {
        Row: {
          id: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          subscribed_at: string;
          unsubscribed_at: string | null;
          is_active: boolean;
        };
        Insert: {
          id?: string;
          email: string;
          first_name?: string | null;
          last_name?: string | null;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
          is_active?: boolean;
        };
        Update: {
          id?: string;
          email?: string;
          first_name?: string | null;
          last_name?: string | null;
          subscribed_at?: string;
          unsubscribed_at?: string | null;
          is_active?: boolean;
        };
      };
      webhook_configs: {
        Row: {
          id: string;
          name: string;
          url: string;
          event_type: string;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          url: string;
          event_type: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          url?: string;
          event_type?: string;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          company: string | null;
          message: string;
          status: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          company?: string | null;
          message: string;
          status?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          company?: string | null;
          message?: string;
          status?: string;
          created_at?: string;
        };
      };
    };
  };
}
