
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TextSection } from '@/types/sections';
import Editor from '@/components/admin/Editor';

interface TextSectionEditorProps {
  section: TextSection;
  onChange: (section: TextSection) => void;
  onDelete: () => void;
}

const TextSectionEditor: React.FC<TextSectionEditorProps> = ({ section, onChange, onDelete }) => {
  const handleContentChange = (content: string) => {
    onChange({ ...section, content });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Text Content</h3>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove Section
          </button>
        </div>
        <div className="mb-4">
          <Editor 
            initialValue={section.content} 
            onChange={handleContentChange} 
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default TextSectionEditor;
