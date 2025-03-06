
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { TestimonialSection } from '@/types/sections';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface TestimonialSectionEditorProps {
  section: TestimonialSection;
  onChange: (section: TestimonialSection) => void;
  onDelete: () => void;
}

const TestimonialSectionEditor: React.FC<TestimonialSectionEditorProps> = ({ section, onChange, onDelete }) => {
  const handleAddTestimonial = () => {
    const newTestimonial = {
      id: uuidv4(),
      quote: '',
      author: '',
      position: '',
      avatar: '',
    };
    
    onChange({
      ...section,
      items: [...section.items, newTestimonial],
    });
  };

  const handleRemoveTestimonial = (testimonialId: string) => {
    onChange({
      ...section,
      items: section.items.filter(item => item.id !== testimonialId),
    });
  };

  const handleTestimonialChange = (testimonialId: string, field: string, value: string) => {
    onChange({
      ...section,
      items: section.items.map(item => 
        item.id === testimonialId ? { ...item, [field]: value } : item
      ),
    });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Testimonials</h3>
          <button
            onClick={onDelete}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            Remove Section
          </button>
        </div>
        
        <div className="space-y-4">
          {section.items.length === 0 ? (
            <div className="text-center p-4 border border-dashed rounded">
              <p className="text-gray-500 mb-2">No testimonials added yet</p>
              <Button onClick={handleAddTestimonial} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add First Testimonial
              </Button>
            </div>
          ) : (
            <>
              {section.items.map((testimonial, index) => (
                <div key={testimonial.id} className="p-4 border rounded relative">
                  <button
                    onClick={() => handleRemoveTestimonial(testimonial.id)}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                    type="button"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  
                  <h4 className="font-medium mb-3">Testimonial {index + 1}</h4>
                  <div className="space-y-3">
                    <div>
                      <Label htmlFor={`quote-${testimonial.id}`}>Quote</Label>
                      <Textarea
                        id={`quote-${testimonial.id}`}
                        value={testimonial.quote}
                        onChange={(e) => handleTestimonialChange(testimonial.id, 'quote', e.target.value)}
                        className="mt-1"
                        placeholder="Enter the testimonial quote"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`author-${testimonial.id}`}>Author</Label>
                      <Input
                        id={`author-${testimonial.id}`}
                        value={testimonial.author}
                        onChange={(e) => handleTestimonialChange(testimonial.id, 'author', e.target.value)}
                        className="mt-1"
                        placeholder="Name of the person"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`position-${testimonial.id}`}>Position (Optional)</Label>
                      <Input
                        id={`position-${testimonial.id}`}
                        value={testimonial.position || ''}
                        onChange={(e) => handleTestimonialChange(testimonial.id, 'position', e.target.value)}
                        className="mt-1"
                        placeholder="CEO, Company Name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor={`avatar-${testimonial.id}`}>Avatar URL (Optional)</Label>
                      <Input
                        id={`avatar-${testimonial.id}`}
                        value={testimonial.avatar || ''}
                        onChange={(e) => handleTestimonialChange(testimonial.id, 'avatar', e.target.value)}
                        className="mt-1"
                        placeholder="https://example.com/avatar.jpg"
                      />
                      {testimonial.avatar && (
                        <div className="mt-2 flex items-center">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.author} 
                            className="w-10 h-10 rounded-full object-cover mr-2" 
                          />
                          <span className="text-sm text-gray-500">Avatar preview</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
              
              <Button onClick={handleAddTestimonial} variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-1" /> Add Another Testimonial
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialSectionEditor;
