
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="py-24 md:py-32 pb-48 md:pb-56 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-brandcentral-50/80 via-white/20 to-brandcentral-100/50 opacity-70 pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-brandcentral-accent bg-brandcentral-50 border border-brandcentral-100 rounded-full animate-fade-in shadow-sm">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
            Trusted by leading retailers
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-10 tracking-tight">
            <AnimatedText
              text="Quality control solutions for global brands"
              tag="h1"
              delay={100}
              className="text-balance bg-clip-text text-transparent bg-gradient-to-r from-brandcentral-800 via-brandcentral-accent to-brandcentral-700"
            />
          </h1>
          
          <p className="text-lg md:text-xl text-brandcentral-600 mb-10 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
            We help businesses ensure their products meet the highest quality standards through comprehensive test-buying and quality control services.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '600ms' }}>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-brandcentral-accent to-blue-500 hover:from-blue-500 hover:to-brandcentral-accent transition-custom text-white shadow-md">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-brandcentral-200 hover:bg-brandcentral-50 transition-custom shadow-sm">
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
