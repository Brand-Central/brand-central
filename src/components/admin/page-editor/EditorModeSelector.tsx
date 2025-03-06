
import React from 'react';
import { Button } from '@/components/ui/button';
import { LayoutTemplate, Code } from 'lucide-react';

interface EditorModeSelectorProps {
  mode: 'visual' | 'code';
  onChange: (mode: 'visual' | 'code') => void;
}

const EditorModeSelector: React.FC<EditorModeSelectorProps> = ({ mode, onChange }) => {
  return (
    <div className="flex gap-2">
      <Button 
        size="sm" 
        variant={mode === 'visual' ? 'secondary' : 'outline'} 
        onClick={() => onChange('visual')}
        className="flex items-center gap-1.5"
      >
        <LayoutTemplate className="h-4 w-4" />
        Visual
      </Button>
      <Button 
        size="sm" 
        variant={mode === 'code' ? 'secondary' : 'outline'} 
        onClick={() => onChange('code')}
        className="flex items-center gap-1.5"
      >
        <Code className="h-4 w-4" />
        HTML
      </Button>
    </div>
  );
};

export default EditorModeSelector;
