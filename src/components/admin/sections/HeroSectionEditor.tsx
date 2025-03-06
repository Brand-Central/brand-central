
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { HeroSection } from '@/types/sections';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

interface HeroSectionEditorProps {
  section: HeroSection;
  onChange: (section: HeroSection) => void;
  onDelete: () => void;
}

const HeroSectionEditor: React.FC<HeroSectionEditorProps> = ({ section, onChange, onDelete }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({ ...section, [e.target.name]: e.target.value });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Hero Banner</h3>
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
            <Label htmlFor="subheading">Subheading</Label>
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
                value={section.buttonText || ''}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="buttonLink">Button Link</Label>
              <Input
                id="buttonLink"
                name="buttonLink"
                value={section.buttonLink || ''}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="backgroundImage">Background Image URL</Label>
            <Input
              id="backgroundImage"
              name="backgroundImage"
              value={section.backgroundImage || ''}
              onChange={handleChange}
              className="mt-1"
              placeholder="https://example.com/image.jpg"
            />
            {section.backgroundImage && (
              <div className="mt-2 p-2 border rounded-md bg-gray-50">
                <img 
                  src={section.backgroundImage} 
                  alt="Background preview" 
                  className="max-h-32 object-cover rounded" 
                />
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroSectionEditor;
