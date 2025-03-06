
import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Bold, Italic, Underline, AlignLeft, AlignCenter, 
  AlignRight, List, ListOrdered, Link as LinkIcon, Image
} from 'lucide-react';

interface EditorProps {
  initialValue?: string;
  onChange: (content: string) => void;
}

const Editor: React.FC<EditorProps> = ({ initialValue = '', onChange }) => {
  const [content, setContent] = useState(initialValue);
  
  const execCommand = useCallback((command: string, value?: string) => {
    document.execCommand(command, false, value);
    
    // Get the updated content from the editable div
    const editorElement = document.getElementById('wysiwyg-editor');
    if (editorElement) {
      const newContent = editorElement.innerHTML;
      setContent(newContent);
      onChange(newContent);
    }
  }, [onChange]);
  
  const handleInsertLink = useCallback(() => {
    const url = prompt('Enter URL');
    if (url) {
      execCommand('createLink', url);
    }
  }, [execCommand]);
  
  const handleInsertImage = useCallback(() => {
    const url = prompt('Enter image URL');
    if (url) {
      execCommand('insertImage', url);
    }
  }, [execCommand]);
  
  return (
    <div className="border rounded-md overflow-hidden">
      <div className="bg-gray-50 border-b p-2 flex flex-wrap gap-1">
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('bold')}
          aria-label="Bold"
        >
          <Bold className="h-4 w-4" />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('italic')}
          aria-label="Italic"
        >
          <Italic className="h-4 w-4" />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('underline')}
          aria-label="Underline"
        >
          <Underline className="h-4 w-4" />
        </Button>
        
        <div className="h-6 border-l mx-1"></div>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('justifyLeft')}
          aria-label="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('justifyCenter')}
          aria-label="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('justifyRight')}
          aria-label="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </Button>
        
        <div className="h-6 border-l mx-1"></div>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('insertUnorderedList')}
          aria-label="Bullet List"
        >
          <List className="h-4 w-4" />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={() => execCommand('insertOrderedList')}
          aria-label="Numbered List"
        >
          <ListOrdered className="h-4 w-4" />
        </Button>
        
        <div className="h-6 border-l mx-1"></div>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={handleInsertLink}
          aria-label="Insert Link"
        >
          <LinkIcon className="h-4 w-4" />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="sm" 
          onClick={handleInsertImage}
          aria-label="Insert Image"
        >
          <Image className="h-4 w-4" />
        </Button>
      </div>
      
      <div
        id="wysiwyg-editor"
        className="p-4 min-h-[300px] focus:outline-none"
        contentEditable
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={(e) => {
          const newContent = e.currentTarget.innerHTML;
          setContent(newContent);
          onChange(newContent);
        }}
      />
    </div>
  );
};

export default Editor;
