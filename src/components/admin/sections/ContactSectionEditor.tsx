
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ContactSection } from '@/types/sections';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

interface ContactSectionEditorProps {
  section: ContactSection;
  onChange: (section: ContactSection) => void;
  onDelete: () => void;
}

const ContactSectionEditor: React.FC<ContactSectionEditorProps> = ({ section, onChange, onDelete }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChange({ ...section, [e.target.name]: e.target.value });
  };

  const handleAddField = () => {
    const newField = {
      id: uuidv4(),
      type: 'text',
      label: 'New Field',
      required: false,
    };
    
    onChange({
      ...section,
      fields: [...section.fields, newField],
    });
  };

  const handleRemoveField = (fieldId: string) => {
    onChange({
      ...section,
      fields: section.fields.filter(field => field.id !== fieldId),
    });
  };

  const handleFieldChange = (fieldId: string, property: string, value: any) => {
    onChange({
      ...section,
      fields: section.fields.map(field => 
        field.id === fieldId ? { ...field, [property]: value } : field
      ),
    });
  };

  return (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">Contact Form</h3>
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
          
          <div>
            <h4 className="font-medium mb-2">Form Fields</h4>
            {section.fields.length === 0 ? (
              <div className="text-center p-4 border border-dashed rounded">
                <p className="text-gray-500 mb-2">No fields added yet</p>
                <Button onClick={handleAddField} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Add First Field
                </Button>
              </div>
            ) : (
              <>
                {section.fields.map((field, index) => (
                  <div key={field.id} className="p-4 border rounded relative mb-3">
                    <button
                      onClick={() => handleRemoveField(field.id)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
                      type="button"
                    >
                      <X className="h-4 w-4" />
                    </button>
                    
                    <h5 className="font-medium mb-3">Field {index + 1}</h5>
                    <div className="space-y-3">
                      <div>
                        <Label htmlFor={`field-label-${field.id}`}>Label</Label>
                        <Input
                          id={`field-label-${field.id}`}
                          value={field.label}
                          onChange={(e) => handleFieldChange(field.id, 'label', e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor={`field-type-${field.id}`}>Field Type</Label>
                        <Select 
                          value={field.type} 
                          onValueChange={(value) => handleFieldChange(field.id, 'type', value)}
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select field type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="text">Text</SelectItem>
                            <SelectItem value="email">Email</SelectItem>
                            <SelectItem value="textarea">Text Area</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Switch
                          checked={field.required}
                          onCheckedChange={(checked) => handleFieldChange(field.id, 'required', checked)}
                          id={`field-required-${field.id}`}
                        />
                        <Label htmlFor={`field-required-${field.id}`}>Required Field</Label>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Button onClick={handleAddField} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-1" /> Add Another Field
                </Button>
              </>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSectionEditor;
