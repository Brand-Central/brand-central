
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Save } from 'lucide-react';

interface PageEditorHeaderProps {
  slug: string;
  isEditMode: boolean;
  onSave: () => void;
  isSaving: boolean;
}

const PageEditorHeader: React.FC<PageEditorHeaderProps> = ({
  slug,
  isEditMode,
  onSave,
  isSaving,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center">
      <Button variant="outline" onClick={() => navigate('/admin/pages')}>
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Pages
      </Button>
      
      <div className="flex gap-2">
        {isEditMode && (
          <Button variant="outline" asChild>
            <a href={`/${slug}`} target="_blank" rel="noreferrer">
              <Eye className="h-4 w-4 mr-2" />
              Preview
            </a>
          </Button>
        )}
        
        <Button 
          className="bg-brandcentral-accent hover:bg-brandcentral-accent/90"
          onClick={onSave}
          disabled={isSaving}
        >
          <Save className="h-4 w-4 mr-2" />
          {isSaving ? 'Saving...' : 'Save Page'}
        </Button>
      </div>
    </div>
  );
};

export default PageEditorHeader;
