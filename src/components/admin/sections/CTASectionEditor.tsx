
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CTASection } from '@/types/sections';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface CTASectionEditorProps {
  section: CTASection;
  onChange: (section: CTASection) => void;
  onDelete: () => void;
}

const CTASectionEditor: React.FC<CTASectionEditorProps> = ({ section, onChange, onDelete }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({ ...section, [e.target.name]: e.target.value });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Call to Action</h3>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove Section
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="heading">Heading</Label>
            <Input
              id="heading"
              name="heading"
              value={section.heading}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          
          <div>
            <Label htmlFor="subheading">Subheading (Optional)</Label>
            <Textarea
              id="subheading"
              name="subheading"
              value={section.subheading || ''}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="buttonText">Button Text</Label>
              <Input
                id="buttonText"
                name="buttonText"
                value={section.buttonText}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="buttonLink">Button Link</Label>
              <Input
                id="buttonLink"
                name="buttonLink"
                value={section.buttonLink}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CTASectionEditor;
