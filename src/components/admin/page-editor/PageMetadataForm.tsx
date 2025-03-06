
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface PageMetadataFormProps {
  title: string;
  setTitle: (title: string) => void;
  slug: string;
  setSlug: (slug: string) => void;
}

const PageMetadataForm: React.FC<PageMetadataFormProps> = ({
  title,
  setTitle,
  slug,
  setSlug,
}) => {
  const { toast } = useToast();

  const handleCopySlug = () => {
    navigator.clipboard.writeText(`${window.location.origin}/${slug}`);
    toast({
      title: "URL copied",
      description: "The page URL has been copied to your clipboard.",
    });
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Page Title</Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter page title"
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="slug">URL Slug</Label>
            <div className="flex items-center mt-1">
              <span className="text-gray-500 mr-1">/</span>
              <Input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, ''))}
                placeholder="page-url-slug"
              />
              <Button 
                type="button" 
                size="icon" 
                variant="ghost" 
                className="ml-2" 
                onClick={handleCopySlug}
                title="Copy full URL"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PageMetadataForm;
