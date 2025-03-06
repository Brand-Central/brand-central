
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GallerySection } from '@/types/sections';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface GallerySectionEditorProps {
  section: GallerySection;
  onChange: (section: GallerySection) => void;
  onDelete: () => void;
}

const GallerySectionEditor: React.FC<GallerySectionEditorProps> = ({ section, onChange, onDelete }) => {
  const handleAddImage = () => {
    const newImage = {
      id: uuidv4(),
      url: '',
      alt: '',
    };
    
    onChange({
      ...section,
      images: [...section.images, newImage],
    });
  };

  const handleRemoveImage = (imageId: string) => {
    onChange({
      ...section,
      images: section.images.filter(image => image.id !== imageId),
    });
  };

  const handleImageChange = (imageId: string, field: 'url' | 'alt', value: string) => {
    onChange({
      ...section,
      images: section.images.map(image => 
        image.id === imageId ? { ...image, [field]: value } : image
      ),
    });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Image Gallery</h3>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove Section
          </button>
        </div>
        
        <div className="space-y-4">
          {section.images.length === 0 ? (
            <div className="text-center p-4 border border-dashed rounded">
              <p className="text-gray-500 mb-2">No images added yet</p>
              <Button onClick={handleAddImage} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add First Image
              </Button>
            </div>
          ) : (
            <>
              {section.images.map((image, index) => (
                <div key={image.id} className="p-4 border rounded relative">
                  <button
                    onClick={() => handleRemoveImage(image.id)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                    type="button"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <h4 className="font-medium mb-3">Image {index + 1}</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor={`image-url-${image.id}`}>Image URL</Label>
                      <Input
                        id={`image-url-${image.id}`}
                        value={image.url}
                        onChange={(e) => handleImageChange(image.id, 'url', e.target.value)}
                        className="mt-1"
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`image-alt-${image.id}`}>Alt Text</Label>
                      <Input
                        id={`image-alt-${image.id}`}
                        value={image.alt || ''}
                        onChange={(e) => handleImageChange(image.id, 'alt', e.target.value)}
                        className="mt-1"
                        placeholder="Description of the image"
                      />
                    </div>
                    
                    {image.url && (
                      <div className="mt-2 p-2 border rounded-md bg-gray-50">
                        <img 
                          src={image.url} 
                          alt={image.alt || ''} 
                          className="max-h-32 object-cover rounded" 
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              <Button onClick={handleAddImage} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add Another Image
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GallerySectionEditor;
