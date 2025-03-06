
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import Editor from '@/components/admin/Editor';
import PageSectionEditor from '@/components/admin/PageSectionEditor';
import EditorModeSelector from './EditorModeSelector';
import { PageContent } from '@/types/sections';

interface PageContentEditorProps {
  content: PageContent;
  onChange: (content: string | PageContent) => void;
  editorMode: 'visual' | 'code';
  setEditorMode: (mode: 'visual' | 'code') => void;
}

const PageContentEditor: React.FC<PageContentEditorProps> = ({
  content,
  onChange,
  editorMode,
  setEditorMode,
}) => {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <Label className="text-base">Page Content</Label>
          <EditorModeSelector mode={editorMode} onChange={setEditorMode} />
        </div>
        
        {editorMode === 'visual' ? (
          <PageSectionEditor 
            initialContent={content}
            onChange={onChange}
          />
        ) : (
          <Editor
            initialValue={content.html || ''}
            onChange={(html) => onChange(html)}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default PageContentEditor;
