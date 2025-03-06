
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, ShieldCheck, Star, Users } from 'lucide-react';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-brandcentral-50 to-transparent opacity-50 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-brandcentral-accent bg-brandcentral-100 rounded-full animate-fade-in">
              Trusted by leading retailers
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 tracking-tight">
              <AnimatedText
                text="Quality control solutions for global brands"
                tag="h1"
                delay={100}
                className="text-balance"
              />
            </h1>
            <p className="text-lg md:text-xl text-brandcentral-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
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

        {/* Brands Ticker */}
        <div className="mt-20 border-y border-brandcentral-100 py-10 bg-white/50 backdrop-blur-sm">
          <div className="container">
            <p className="text-center text-sm text-brandcentral-400 uppercase tracking-wider mb-6">Trusted by industry leaders</p>
            <div className="flex justify-around items-center flex-wrap gap-8 md:gap-16">
              <div className="text-brandcentral-800 font-medium text-lg">Walmart</div>
              <div className="text-brandcentral-800 font-medium text-lg">Amazon</div>
              <div className="text-brandcentral-800 font-medium text-lg">Target</div>
              <div className="text-brandcentral-800 font-medium text-lg">Best Buy</div>
              <div className="text-brandcentral-800 font-medium text-lg">Home Depot</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
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

      {/* Services Overview */}
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
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-subtle p-8 transition-custom hover:shadow-elevated">
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h3 className="text-xl font-medium mb-3">Test Buying</h3>
              <p className="text-brandcentral-500 mb-6">
                We purchase your products from retail channels to evaluate them from the consumer's perspective, giving you valuable insights.
              </p>
              <Link to="/services#test-buying" className="text-brandcentral-accent font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-subtle p-8 transition-custom hover:shadow-elevated">
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h3 className="text-xl font-medium mb-3">Quality Control</h3>
              <p className="text-brandcentral-500 mb-6">
                Our thorough quality assessment helps you identify potential issues before they reach your customers.
              </p>
              <Link to="/services#quality-control" className="text-brandcentral-accent font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-subtle p-8 transition-custom hover:shadow-elevated">
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h3 className="text-xl font-medium mb-3">Consulting Services</h3>
              <p className="text-brandcentral-500 mb-6">
                Get expert guidance on improving product quality, compliance, and overall customer satisfaction.
              </p>
              <Link to="/services#consulting" className="text-brandcentral-accent font-medium inline-flex items-center hover:underline">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
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

      {/* CTA Section */}
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
    </main>
  );
};

export default Index;
