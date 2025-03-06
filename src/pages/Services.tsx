
import { ArrowRight, CheckCircle, ShieldCheck, ClipboardCheck, FileText, BarChart4, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-brandcentral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-50 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-brandcentral-accent bg-white rounded-full animate-fade-in">
              Comprehensive Solutions
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              <AnimatedText
                text="Our Quality Control Services"
                tag="h1"
                delay={100}
              />
            </h1>
            <p className="text-lg text-brandcentral-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              We offer a comprehensive suite of services designed to help businesses ensure their products meet the highest standards of quality and compliance.
            </p>
          </div>
        </div>
      </section>
      
      {/* Services Details */}
      <section className="py-20 bg-white" id="test-buying">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                <AnimatedText
                  text="Test Buying Services"
                  tag="h2"
                />
              </h2>
              <p className="text-brandcentral-600 mb-6">
                Our test buying services involve purchasing your products through various retail channels to evaluate them from the consumer's perspective. This approach provides valuable insights into the customer experience and helps identify potential issues.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Mystery Shopping</p>
                    <p className="text-brandcentral-500">Evaluate the in-store or online shopping experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Packaging Assessment</p>
                    <p className="text-brandcentral-500">Analyze packaging durability, protection, and presentation.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Competitive Analysis</p>
                    <p className="text-brandcentral-500">Compare your products against competitors in the market.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Documentation Review</p>
                    <p className="text-brandcentral-500">Evaluate user manuals, warranty information, and other included materials.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=1974&auto=format&fit=crop"
                alt="Person shopping online for test-buying services" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brandcentral-800/20 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24" id="quality-control">
            <div className="order-2 md:order-1">
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <ClipboardCheck className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                <AnimatedText
                  text="Quality Control Assessment"
                  tag="h2"
                />
              </h2>
              <p className="text-brandcentral-600 mb-6">
                Our thorough quality assessment helps you identify potential issues before they reach your customers. We evaluate your products against industry standards, regulatory requirements, and your own specifications.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Performance Testing</p>
                    <p className="text-brandcentral-500">Verify product functionality and performance against specifications.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Durability Assessment</p>
                    <p className="text-brandcentral-500">Evaluate product resilience and longevity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Safety Inspection</p>
                    <p className="text-brandcentral-500">Identify potential safety hazards or concerns.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Visual and Functional Analysis</p>
                    <p className="text-brandcentral-500">Assess appearance, fit, finish, and overall quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 h-[400px] rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070&auto=format&fit=crop"
                alt="Quality control specialist inspecting a product" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brandcentral-800/20 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24" id="compliance">
            <div>
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <FileText className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                <AnimatedText
                  text="Compliance Assessment"
                  tag="h2"
                />
              </h2>
              <p className="text-brandcentral-600 mb-6">
                Ensure your products meet all relevant regulatory requirements and industry standards. Our compliance assessment helps you avoid costly recalls and potential legal issues.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Regulatory Compliance Check</p>
                    <p className="text-brandcentral-500">Verify adherence to relevant laws and regulations.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Labeling and Warning Evaluation</p>
                    <p className="text-brandcentral-500">Review product labeling for accuracy and compliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Material Safety Analysis</p>
                    <p className="text-brandcentral-500">Assess materials used in product manufacturing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Risk Assessment</p>
                    <p className="text-brandcentral-500">Identify potential risks and recommend mitigation strategies.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop"
                alt="Person checking regulatory compliance documents" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brandcentral-800/20 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24" id="consulting">
            <div className="order-2 md:order-1">
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                <AnimatedText
                  text="Consulting Services"
                  tag="h2"
                />
              </h2>
              <p className="text-brandcentral-600 mb-6">
                Get expert guidance on improving product quality, compliance, and overall customer satisfaction. Our consultants work with you to develop and implement effective quality control strategies.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Quality Improvement Planning</p>
                    <p className="text-brandcentral-500">Develop strategies to enhance product quality.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Process Optimization</p>
                    <p className="text-brandcentral-500">Identify opportunities to streamline quality control processes.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Training and Education</p>
                    <p className="text-brandcentral-500">Provide training for your team on quality control best practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Supplier Management Guidance</p>
                    <p className="text-brandcentral-500">Develop strategies for managing supplier quality.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 h-[400px] rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
                alt="Business consultants in a meeting" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brandcentral-800/20 to-transparent"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center" id="reporting">
            <div>
              <div className="w-12 h-12 bg-brandcentral-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart4 className="h-6 w-6 text-brandcentral-accent" />
              </div>
              <h2 className="text-3xl font-semibold mb-4">
                <AnimatedText
                  text="Reporting & Analytics"
                  tag="h2"
                />
              </h2>
              <p className="text-brandcentral-600 mb-6">
                Receive detailed reports with actionable insights to help you improve your products and processes. Our reports are designed to be comprehensive yet easy to understand.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Comprehensive Documentation</p>
                    <p className="text-brandcentral-500">Detailed reports covering all aspects of quality assessment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Actionable Recommendations</p>
                    <p className="text-brandcentral-500">Clear guidance on how to address identified issues.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Trend Analysis</p>
                    <p className="text-brandcentral-500">Identify patterns and trends in product quality over time.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-brandcentral-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Visual Documentation</p>
                    <p className="text-brandcentral-500">Photographs and diagrams to illustrate findings.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[400px] rounded-lg overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Data analytics dashboard for quality reports" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brandcentral-800/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brandcentral-900 text-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              <AnimatedText
                text="Ready to elevate your product quality?"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-200 mb-8 text-lg">
              Contact us today to discuss how our services can help your business deliver exceptional products that build customer trust and loyalty.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brandcentral-accent hover:bg-brandcentral-accent/90 text-white">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
