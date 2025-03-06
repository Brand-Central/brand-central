
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const { data: page, isLoading, error } = useQuery({
    queryKey: ['page-content', slug],
    queryFn: async () => {
      if (!slug) {
        throw new Error('No slug provided');
      }
      
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
      if (error) {
        throw error;
      }
      
      return data;
    },
    retry: false,
    enabled: Boolean(slug),
  });

  useEffect(() => {
    if (error) {
      navigate('/not-found', { replace: true });
    }
  }, [error, navigate]);

  if (isLoading) {
    return (
      <div className="pt-24 pb-16 container">
        <div className="animate-pulse">
          <div className="h-10 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-full mb-3"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 mb-8"></div>
          <div className="h-32 bg-gray-200 rounded w-full mb-3"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{page?.title} | Brandcentral</title>
        <meta name="description" content={page?.meta_description || ''} />
      </Helmet>

      <main className="pt-24 pb-16 container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {page?.title}
          </h1>
          
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: page?.content?.html || '' }}
          />
        </div>
      </main>
    </>
  );
};

export default DynamicPage;
