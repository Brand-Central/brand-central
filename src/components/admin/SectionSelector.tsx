
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { PlusCircle, Type, Image, Layout, MessageSquare, Gallery, Phone } from 'lucide-react';
import { SectionType } from '@/types/sections';

const sectionTypes: { type: SectionType; icon: React.ReactNode; label: string; description: string }[] = [
  { 
    type: 'text', 
    icon: <Type className="h-5 w-5" />, 
    label: 'Text Content', 
    description: 'Rich text content for your page' 
  },
  { 
    type: 'hero', 
    icon: <Image className="h-5 w-5" />, 
    label: 'Hero Banner', 
    description: 'Eye-catching header with image background' 
  },
  { 
    type: 'feature', 
    icon: <Layout className="h-5 w-5" />, 
    label: 'Feature Grid', 
    description: 'Showcase features or services in a grid' 
  },
  { 
    type: 'cta', 
    icon: <PlusCircle className="h-5 w-5" />, 
    label: 'Call to Action', 
    description: 'Encourage visitors to take action' 
  },
  { 
    type: 'testimonial', 
    icon: <MessageSquare className="h-5 w-5" />, 
    label: 'Testimonials', 
    description: 'Display customer reviews and feedback' 
  },
  { 
    type: 'gallery', 
    icon: <Gallery className="h-5 w-5" />, 
    label: 'Image Gallery', 
    description: 'Showcase multiple images in a gallery format' 
  },
  { 
    type: 'contact', 
    icon: <Phone className="h-5 w-5" />, 
    label: 'Contact Form', 
    description: 'Allow visitors to get in touch' 
  }
];

interface SectionSelectorProps {
  onSelectSectionType: (type: SectionType) => void;
}

const SectionSelector: React.FC<SectionSelectorProps> = ({ onSelectSectionType }) => {
  const [open, setOpen] = React.useState(false);

  const handleSectionSelect = (type: SectionType) => {
    onSelectSectionType(type);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2 w-full mb-4">
          <PlusCircle className="h-4 w-4" />
          Add New Section
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Section</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-4">
          {sectionTypes.map((section) => (
            <Button
              key={section.type}
              variant="outline"
              className="flex flex-col items-start text-left h-auto p-3 justify-start"
              onClick={() => handleSectionSelect(section.type)}
            >
              <div className="flex items-center w-full mb-2">
                <div className="bg-gray-100 p-1.5 rounded-md mr-2">
                  {section.icon}
                </div>
                <span className="font-medium">{section.label}</span>
              </div>
              <p className="text-sm text-gray-500 font-normal">{section.description}</p>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SectionSelector;
