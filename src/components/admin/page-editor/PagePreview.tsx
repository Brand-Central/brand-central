
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { PageContent } from '@/types/sections';

interface PagePreviewProps {
  title: string;
  content: PageContent;
}

const PagePreview: React.FC<PagePreviewProps> = ({ title, content }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">{title || 'Untitled Page'}</h1>
          
          {content.html ? (
            <div 
              className="prose max-w-none border-t pt-4"
              dangerouslySetInnerHTML={{ __html: content.html }}
            />
          ) : content.sections && content.sections.length > 0 ? (
            <div className="border-t pt-4">
              <div className="text-gray-500 mb-4">
                Page has {content.sections.length} section(s). Preview will render in live mode.
              </div>
            </div>
          ) : (
            <div className="text-gray-500 italic border-t pt-4">
              No content yet. Start editing to see a preview.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PagePreview;
