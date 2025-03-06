
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Section, SectionType, PageContent, TextSection, HeroSection, FeatureSection, CTASection, GallerySection, TestimonialSection, ContactSection } from '@/types/sections';
import SectionSelector from '@/components/admin/SectionSelector';
import TextSectionEditor from '@/components/admin/sections/TextSectionEditor';
import HeroSectionEditor from '@/components/admin/sections/HeroSectionEditor';
import CTASectionEditor from '@/components/admin/sections/CTASectionEditor';
import GallerySectionEditor from '@/components/admin/sections/GallerySectionEditor';
import TestimonialSectionEditor from '@/components/admin/sections/TestimonialSectionEditor';
import ContactSectionEditor from '@/components/admin/sections/ContactSectionEditor';
import { Card, CardContent } from '@/components/ui/card';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GripVertical } from 'lucide-react';

interface PageSectionEditorProps {
  initialContent: PageContent;
  onChange: (content: PageContent) => void;
}

const PageSectionEditor: React.FC<PageSectionEditorProps> = ({ initialContent, onChange }) => {
  const [sections, setSections] = useState<Section[]>(initialContent.sections || []);

  // Helper to create a new section based on type
  const createNewSection = (type: SectionType): Section => {
    const baseSection = {
      id: uuidv4(),
      type,
      order: sections.length,
    };

    switch (type) {
      case 'text':
        return {
          ...baseSection,
          type: 'text',
          content: '<p>Enter your content here...</p>',
        } as TextSection;
      case 'hero':
        return {
          ...baseSection,
          type: 'hero',
          heading: 'Your Heading Here',
          subheading: 'Add a compelling subheading',
          buttonText: 'Learn More',
          buttonLink: '/',
        } as HeroSection;
      case 'feature':
        return {
          ...baseSection,
          type: 'feature',
          heading: 'Features & Benefits',
          items: [
            { id: uuidv4(), title: 'Feature 1', description: 'Description of feature 1' },
            { id: uuidv4(), title: 'Feature 2', description: 'Description of feature 2' },
          ],
        } as FeatureSection;
      case 'cta':
        return {
          ...baseSection,
          type: 'cta',
          heading: 'Ready to Get Started?',
          subheading: 'Join thousands of satisfied customers today.',
          buttonText: 'Get Started',
          buttonLink: '/contact',
        } as CTASection;
      case 'gallery':
        return {
          ...baseSection,
          type: 'gallery',
          images: [
            { id: uuidv4(), url: '', alt: 'Gallery image 1' },
          ],
        } as GallerySection;
      case 'testimonial':
        return {
          ...baseSection,
          type: 'testimonial',
          items: [
            { id: uuidv4(), quote: 'This product changed our business!', author: 'Jane Smith', position: 'CEO, Company Name' },
          ],
        } as TestimonialSection;
      case 'contact':
        return {
          ...baseSection,
          type: 'contact',
          heading: 'Get In Touch',
          subheading: 'We\'d love to hear from you. Fill out the form below.',
          fields: [
            { id: uuidv4(), type: 'text', label: 'Name', required: true },
            { id: uuidv4(), type: 'email', label: 'Email', required: true },
            { id: uuidv4(), type: 'textarea', label: 'Message', required: true },
          ],
        } as ContactSection;
      default:
        return {
          ...baseSection,
          type: 'text',
          content: '<p>Enter your content here...</p>',
        } as TextSection;
    }
  };

  const handleAddSection = (type: SectionType) => {
    const newSection = createNewSection(type);
    const updatedSections = [...sections, newSection];
    setSections(updatedSections);
    onChange({ ...initialContent, sections: updatedSections });
  };

  const handleSectionChange = (updatedSection: Section) => {
    const updatedSections = sections.map(section => 
      section.id === updatedSection.id ? updatedSection : section
    );
    setSections(updatedSections);
    onChange({ ...initialContent, sections: updatedSections });
  };

  const handleDeleteSection = (sectionId: string) => {
    const updatedSections = sections
      .filter(section => section.id !== sectionId)
      .map((section, index) => ({ ...section, order: index }));
    
    setSections(updatedSections);
    onChange({ ...initialContent, sections: updatedSections });
  };

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;
    
    const items = Array.from(sections);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index
    }));
    
    setSections(updatedItems);
    onChange({ ...initialContent, sections: updatedItems });
  };

  const renderSectionEditor = (section: Section) => {
    switch (section.type) {
      case 'text':
        return (
          <TextSectionEditor
            section={section as TextSection}
            onChange={(updated) => handleSectionChange(updated)}
            onDelete={() => handleDeleteSection(section.id)}
          />
        );
      case 'hero':
        return (
          <HeroSectionEditor
            section={section as HeroSection}
            onChange={(updated) => handleSectionChange(updated)}
            onDelete={() => handleDeleteSection(section.id)}
          />
        );
      case 'cta':
        return (
          <CTASectionEditor
            section={section as CTASection}
            onChange={(updated) => handleSectionChange(updated)}
            onDelete={() => handleDeleteSection(section.id)}
          />
        );
      case 'gallery':
        return (
          <GallerySectionEditor
            section={section as GallerySection}
            onChange={(updated) => handleSectionChange(updated)}
            onDelete={() => handleDeleteSection(section.id)}
          />
        );
      case 'testimonial':
        return (
          <TestimonialSectionEditor
            section={section as TestimonialSection}
            onChange={(updated) => handleSectionChange(updated)}
            onDelete={() => handleDeleteSection(section.id)}
          />
        );
      case 'contact':
        return (
          <ContactSectionEditor
            section={section as ContactSection}
            onChange={(updated) => handleSectionChange(updated)}
            onDelete={() => handleDeleteSection(section.id)}
          />
        );
      default:
        return (
          <Card className="mb-4">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Unknown Section Type</h3>
                <button
                  onClick={() => handleDeleteSection(section.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove Section
                </button>
              </div>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="space-y-4">
      <SectionSelector onSelectSectionType={handleAddSection} />
      
      {sections.length === 0 ? (
        <div className="text-center p-8 border border-dashed rounded-md">
          <p className="text-gray-500">No sections added yet. Click "Add New Section" to start building your page.</p>
        </div>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="sections">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="space-y-4"
              >
                {sections
                  .sort((a, b) => a.order - b.order)
                  .map((section, index) => (
                    <Draggable key={section.id} draggableId={section.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                        >
                          <div className="flex items-start gap-2">
                            <div 
                              {...provided.dragHandleProps}
                              className="mt-4 p-2 cursor-move text-gray-400 hover:text-gray-600"
                            >
                              <GripVertical size={20} />
                            </div>
                            <div className="flex-1">
                              {renderSectionEditor(section)}
                            </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default PageSectionEditor;
