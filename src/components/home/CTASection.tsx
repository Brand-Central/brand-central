
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-20 bg-brandcentral-900 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            <AnimatedText
              text="Ready to ensure your products meet the highest standards?"
              tag="h2"
              className="text-balance"
            />
          </h2>
          <p className="text-brandcentral-200 mb-8 text-lg">
            Contact us today to discuss how our quality control services can help your business deliver exceptional products that build customer trust.
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
  );
};

export default CTASection;
