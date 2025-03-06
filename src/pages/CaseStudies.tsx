
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    id: 1,
    quote: "Brandcentral's thorough test-buying program helped us identify several issues with our product packaging that we would have otherwise missed. Their detailed reports and actionable recommendations were invaluable.",
    name: "Sarah Johnson",
    title: "Product Director, Consumer Electronics Company",
    rating: 5
  },
  {
    id: 2,
    quote: "We've been working with Brandcentral for over three years, and their quality control services have consistently helped us maintain high standards across our product line. Their attention to detail is unmatched.",
    name: "David Chen",
    title: "Quality Assurance Manager, Home Goods Manufacturer",
    rating: 5
  },
  {
    id: 3,
    quote: "The compliance assessment provided by Brandcentral saved us from a potential product recall. Their team identified a labeling issue that didn't meet regulatory requirements, allowing us to address it before distribution.",
    name: "Michael Rodriguez",
    title: "Operations VP, Beauty Products Brand",
    rating: 5
  },
  {
    id: 4,
    quote: "As a small business, we weren't sure if we could afford professional quality control services. Brandcentral worked with us to create a tailored program that fit our budget while still delivering exceptional value.",
    name: "Emily Peterson",
    title: "Founder, Specialty Food Brand",
    rating: 4
  },
  {
    id: 5,
    quote: "The consulting services from Brandcentral helped us completely transform our quality control processes. We've seen a significant reduction in customer complaints and returns since implementing their recommendations.",
    name: "Robert Thompson",
    title: "CEO, Apparel Manufacturer",
    rating: 5
  },
  {
    id: 6,
    quote: "Brandcentral's reporting is clear, comprehensive, and actionable. Their insights have been instrumental in our product development process and have helped us stay ahead of our competitors.",
    name: "Jennifer Garcia",
    title: "Product Development Manager, Toy Company",
    rating: 5
  }
];

const caseStudies = [
  {
    id: 1,
    title: "Reducing Product Returns for a Major Electronics Retailer",
    description: "Through our comprehensive quality control program, we helped a major electronics retailer reduce product returns by 35% within six months, resulting in significant cost savings and improved customer satisfaction.",
    tags: ["Electronics", "Quality Control", "Return Reduction"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Ensuring Compliance for a Global Beauty Brand",
    description: "Our compliance assessment services helped a global beauty brand identify and address potential regulatory issues before launching in new markets, ensuring smooth market entry and avoiding costly delays.",
    tags: ["Beauty", "Compliance", "Global Markets"],
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Improving Product Quality for a Home Goods Manufacturer",
    description: "By implementing our test-buying program, a home goods manufacturer was able to identify and resolve several quality issues, resulting in a 40% decrease in negative reviews and a 25% increase in customer satisfaction scores.",
    tags: ["Home Goods", "Quality Improvement", "Customer Satisfaction"],
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop"
  }
];

// Star rating component
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg 
          key={i} 
          className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
          fill="currentColor" 
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      ))}
    </div>
  );
};

const CaseStudies = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-brandcentral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-50 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-brandcentral-accent bg-white rounded-full animate-fade-in">
              Success Stories
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              <AnimatedText
                text="Case Studies & Testimonials"
                tag="h1"
                delay={100}
              />
            </h1>
            <p className="text-lg text-brandcentral-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              Discover how our quality control services have helped businesses across various industries improve their products and build customer trust.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-brandcentral-accent bg-brandcentral-50 rounded-full">
              Case Studies
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <AnimatedText
                text="Real-world impact for our clients"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-600">
              See how our services have helped businesses solve real problems and achieve tangible results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-white border border-brandcentral-100 rounded-lg overflow-hidden shadow-subtle transition-custom hover:shadow-elevated">
                <div className="h-48 bg-brandcentral-100 relative">
                  <img 
                    src={study.image}
                    alt={study.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-brandcentral-800/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium bg-brandcentral-50 text-brandcentral-600 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{study.title}</h3>
                  <p className="text-brandcentral-600 mb-4">{study.description}</p>
                  <button className="text-brandcentral-accent font-medium inline-flex items-center hover:underline">
                    Read full case study <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-brandcentral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-brandcentral-accent bg-white rounded-full">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <AnimatedText
                text="What our clients say about us"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-600">
              Hear from businesses that have experienced the benefits of our quality control services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-subtle transition-custom hover:shadow-elevated">
                <Quote className="h-8 w-8 text-brandcentral-200 mb-4" />
                <p className="text-brandcentral-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-brandcentral-500">{testimonial.title}</p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brandcentral-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              <AnimatedText
                text="Ready to become our next success story?"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-200 mb-8 text-lg">
              Contact us today to discuss how our quality control services can help your business achieve similar results.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brandcentral-accent hover:bg-brandcentral-accent/90 text-white">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;
