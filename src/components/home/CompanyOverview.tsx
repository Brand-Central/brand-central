
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const CompanyOverview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-brandcentral-accent bg-brandcentral-50 rounded-full">
              About Brandcentral
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <AnimatedText
                text="Setting the benchmark for product quality"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-600 mb-6">
              Brandcentral is a leading provider of quality control and test-buying services for businesses of all sizes. For over a decade, we've helped companies ensure their products meet rigorous standards and exceed customer expectations.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-brandcentral-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg">Thorough Assessment</h3>
                  <p className="text-brandcentral-500">Comprehensive evaluation of product quality, packaging, and compliance with regulations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-brandcentral-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg">Actionable Insights</h3>
                  <p className="text-brandcentral-500">Detailed reports with clear recommendations to improve product quality and compliance.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-brandcentral-accent shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-medium text-lg">Expert Guidance</h3>
                  <p className="text-brandcentral-500">Experienced professionals who understand industry standards and consumer expectations.</p>
                </div>
              </div>
            </div>
            <Link to="/services">
              <Button className="bg-brandcentral-900 hover:bg-brandcentral-800 transition-custom">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="order-1 md:order-2 h-[400px] md:h-[500px] rounded-lg overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Quality control specialists inspecting products" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brandcentral-800/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
