
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Star, Users } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  link 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string; 
  link: string; 
}) => (
  <div className="bg-white rounded-lg shadow-subtle p-8 transition-custom hover:shadow-elevated">
    <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
      <Icon className="h-6 w-6 text-brandcentral-accent" />
    </div>
    <h3 className="text-xl font-medium mb-3">{title}</h3>
    <p className="text-brandcentral-500 mb-6">
      {description}
    </p>
    <Link to={link} className="text-brandcentral-accent font-medium inline-flex items-center hover:underline">
      Learn more <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: ShieldCheck,
      title: "Test Buying",
      description: "We purchase your products from retail channels to evaluate them from the consumer's perspective, giving you valuable insights.",
      link: "/services#test-buying"
    },
    {
      icon: Star,
      title: "Quality Control",
      description: "Our thorough quality assessment helps you identify potential issues before they reach your customers.",
      link: "/services#quality-control"
    },
    {
      icon: Users,
      title: "Consulting Services",
      description: "Get expert guidance on improving product quality, compliance, and overall customer satisfaction.",
      link: "/services#consulting"
    }
  ];

  return (
    <section className="py-20 bg-brandcentral-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-brandcentral-accent bg-white rounded-full">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            <AnimatedText
              text="Comprehensive quality control solutions"
              tag="h2"
            />
          </h2>
          <p className="text-brandcentral-600">
            We offer a full spectrum of services designed to ensure your products meet the highest standards of quality and compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="outline" className="border-brandcentral-200 hover:bg-brandcentral-50">
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
