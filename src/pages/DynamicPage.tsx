
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/hooks/use-toast';
import { Section } from '@/types/sections';

// Component to render different section types
const PageSection = ({ section }: { section: Section }) => {
  switch (section.type) {
    case 'text':
      return (
        <div className="my-8">
          <div dangerouslySetInnerHTML={{ __html: section.content }} />
        </div>
      );
      
    case 'hero':
      return (
        <div 
          className="relative py-16 my-8 rounded-lg overflow-hidden" 
          style={section.backgroundImage ? { 
            backgroundImage: `url(${section.backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center' 
          } : { 
            backgroundColor: '#f8f9fa' 
          }}
        >
          {section.backgroundImage && (
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          )}
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${section.backgroundImage ? 'text-white' : 'text-gray-900'}`}>
              {section.heading}
            </h2>
            {section.subheading && (
              <p className={`text-xl md:text-2xl mb-8 ${section.backgroundImage ? 'text-gray-100' : 'text-gray-600'}`}>
                {section.subheading}
              </p>
            )}
            {section.buttonText && section.buttonLink && (
              <a 
                href={section.buttonLink} 
                className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-brandcentral-accent text-white hover:bg-brandcentral-accent/90 h-10 px-6 py-2"
              >
                {section.buttonText}
              </a>
            )}
          </div>
        </div>
      );
      
    case 'feature':
      return (
        <div className="my-8">
          <h2 className="text-3xl font-bold text-center mb-8">{section.heading}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.items.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
      
    case 'cta':
      return (
        <div className="bg-gray-100 rounded-lg p-8 my-8 text-center">
          <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
          {section.subheading && (
            <p className="text-xl text-gray-600 mb-6">{section.subheading}</p>
          )}
          <a 
            href={section.buttonLink} 
            className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-brandcentral-accent text-white hover:bg-brandcentral-accent/90 h-10 px-6 py-2"
          >
            {section.buttonText}
          </a>
        </div>
      );
      
    // Add cases for other section types as needed
      
    default:
      return null;
  }
};

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();

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
        console.error('Error fetching page:', error);
        throw error;
      }
      
      return data;
    },
    retry: false,
    enabled: Boolean(slug),
  });

  useEffect(() => {
    if (error) {
      toast({
        title: "Page not found",
        description: "The page you're looking for doesn't exist or isn't published yet.",
        variant: "destructive"
      });
      navigate('/not-found', { replace: true });
    }
  }, [error, navigate, toast]);

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
        <title>{page?.title || 'Page'} | Brandcentral</title>
        <meta name="description" content={page?.meta_description || ''} />
      </Helmet>

      <main className="pt-24 pb-16 container relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {page?.title}
          </h1>
          
          {/* Render page content based on whether it has sections or just HTML */}
          {page?.content?.sections && page.content.sections.length > 0 ? (
            <div>
              {page.content.sections
                .sort((a: any, b: any) => a.order - b.order)
                .map((section: Section) => (
                  <PageSection key={section.id} section={section} />
                ))
              }
            </div>
          ) : (
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: page?.content?.html || '' }}
            />
          )}
        </div>
      </main>
    </>
  );
};

export default DynamicPage;
