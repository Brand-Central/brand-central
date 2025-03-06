
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 pb-48 md:pb-56 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-brandcentral-50 to-transparent opacity-50 pointer-events-none"></div>
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-brandcentral-accent bg-brandcentral-100 rounded-full animate-fade-in">
            Trusted by leading retailers
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 tracking-tight">
            <AnimatedText
              text="Quality control solutions for global brands"
              tag="h1"
              delay={100}
              className="text-balance"
            />
          </h1>
          <p className="text-lg md:text-xl text-brandcentral-600 mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            We help businesses ensure their products meet the highest quality standards through comprehensive test-buying and quality control services.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            <Link to="/contact">
              <Button size="lg" className="bg-brandcentral-accent hover:bg-brandcentral-accent/90 transition-custom text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-brandcentral-200 hover:bg-brandcentral-50 transition-custom">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
