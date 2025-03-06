
export type SectionType = 
  | 'hero'
  | 'text'
  | 'feature'
  | 'cta'
  | 'gallery'
  | 'testimonial'
  | 'contact';

export interface BaseSection {
  id: string;
  type: SectionType;
  title?: string;
  order: number;
}

export interface TextSection extends BaseSection {
  type: 'text';
  content: string;
}

export interface HeroSection extends BaseSection {
  type: 'hero';
  heading: string;
  subheading?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

export interface FeatureSection extends BaseSection {
  type: 'feature';
  heading: string;
  items: {
    id: string;
    title: string;
    description: string;
    icon?: string;
  }[];
}

export interface CTASection extends BaseSection {
  type: 'cta';
  heading: string;
  subheading?: string;
  buttonText: string;
  buttonLink: string;
}

export interface GallerySection extends BaseSection {
  type: 'gallery';
  images: {
    id: string;
    url: string;
    alt?: string;
  }[];
}

export interface TestimonialSection extends BaseSection {
  type: 'testimonial';
  items: {
    id: string;
    quote: string;
    author: string;
    position?: string;
    avatar?: string;
  }[];
}

export interface ContactSection extends BaseSection {
  type: 'contact';
  heading: string;
  subheading?: string;
  fields: {
    id: string;
    type: 'text' | 'email' | 'textarea';
    label: string;
    required: boolean;
  }[];
}

export type Section = 
  | TextSection
  | HeroSection
  | FeatureSection 
  | CTASection
  | GallerySection
  | TestimonialSection
  | ContactSection;

export interface PageContent {
  html?: string;
  sections?: Section[];
}
