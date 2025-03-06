
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedText from '@/components/ui/AnimatedText';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Consultation",
      description: "We start with a thorough discussion to understand your specific needs, challenges, and quality control objectives. This helps us tailor our approach to your unique requirements.",
      icon: "🤝"
    },
    {
      number: 2,
      title: "Custom Plan Development",
      description: "Based on our consultation, we develop a customized quality control plan that outlines the specific services, timeline, and deliverables for your project.",
      icon: "📝"
    },
    {
      number: 3,
      title: "Test Buying & Sample Collection",
      description: "Our team purchases your products through various retail channels to evaluate them from the consumer's perspective. This gives us valuable insights into the customer experience.",
      icon: "🛒"
    },
    {
      number: 4,
      title: "Comprehensive Assessment",
      description: "We conduct a thorough evaluation of your products, examining everything from packaging and appearance to functionality and durability. This assessment is based on industry standards and your specific requirements.",
      icon: "🔍"
    },
    {
      number: 5,
      title: "Detailed Analysis",
      description: "Our experts analyze the findings from the assessment to identify potential issues, areas for improvement, and strengths to leverage.",
      icon: "📊"
    },
    {
      number: 6,
      title: "Report Generation",
      description: "We compile our findings into a comprehensive report that includes detailed observations, high-quality images, and specific recommendations for improvement.",
      icon: "📄"
    },
    {
      number: 7,
      title: "Results Presentation",
      description: "We present our findings and recommendations to your team, answering questions and providing clarity on the assessment results.",
      icon: "📊"
    },
    {
      number: 8,
      title: "Implementation Support",
      description: "If needed, we can provide ongoing support to help you implement our recommendations and establish effective quality control processes.",
      icon: "🔄"
    }
  ];

  const faqs = [
    {
      question: "How long does the quality control process typically take?",
      answer: "The duration of our quality control process varies depending on the complexity of your products and the scope of the assessment. Generally, a standard assessment can be completed within 2-4 weeks, but we'll provide a more accurate timeline during the initial consultation."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes, we work with businesses of all sizes, from startups to large corporations. We tailor our services to meet the specific needs and budgets of each client, ensuring that every business can benefit from professional quality control."
    },
    {
      question: "What industries do you serve?",
      answer: "We serve a wide range of industries, including but not limited to consumer electronics, home goods, apparel, beauty products, food and beverage, toys, and automotive accessories. Our adaptable methodology can be applied to virtually any product category."
    },
    {
      question: "How do you handle confidential information?",
      answer: "We take confidentiality very seriously. All client information is protected through strict confidentiality agreements, and we have secure systems in place to safeguard your proprietary information. Our team members are trained in handling sensitive data with the utmost discretion."
    },
    {
      question: "Can you help with products that are still in development?",
      answer: "Absolutely. We offer pre-production quality assessments that can help identify potential issues before full-scale manufacturing. This proactive approach can save significant time and resources by addressing problems early in the development process."
    },
    {
      question: "Do you provide ongoing quality monitoring services?",
      answer: "Yes, we offer ongoing quality monitoring programs for clients who want to maintain consistent quality control. These programs can be scheduled at regular intervals (monthly, quarterly, etc.) to ensure that your products continue to meet high standards over time."
    }
  ];

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-brandcentral-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-white to-transparent opacity-50 pointer-events-none"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium text-brandcentral-accent bg-white rounded-full animate-fade-in">
              Our Process
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">
              <AnimatedText
                text="How Our Quality Control Process Works"
                tag="h1"
                delay={100}
              />
            </h1>
            <p className="text-lg text-brandcentral-600 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '400ms' }}>
              Our systematic approach ensures thorough evaluation and actionable insights to help you improve product quality and customer satisfaction.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
            alt="Team collaboration" 
            className="w-full h-full object-cover object-top opacity-10"
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-brandcentral-accent bg-brandcentral-50 rounded-full">
              Step-by-Step
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <AnimatedText
                text="Our Quality Control Process"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-600">
              From initial consultation to detailed reporting, our comprehensive process ensures thorough quality assessment and actionable insights.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-brandcentral-100 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8`}>
                    {/* Step Number (visible on mobile only) */}
                    <div className="md:hidden flex items-center justify-center w-12 h-12 bg-brandcentral-accent text-white rounded-full text-xl font-bold mb-4">
                      {step.number}
                    </div>
                    
                    {/* Content */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                      <h3 className="text-xl font-medium mb-2">{step.title}</h3>
                      <p className="text-brandcentral-600">{step.description}</p>
                    </div>
                    
                    {/* Step Number (desktop) */}
                    <div className="hidden md:flex items-center justify-center w-14 h-14 bg-brandcentral-accent text-white rounded-full text-xl font-bold absolute left-1/2 top-0 transform -translate-x-1/2 z-10">
                      {step.number}
                    </div>
                    
                    {/* Icon/Image */}
                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'} flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                      <div className="w-16 h-16 bg-brandcentral-50 rounded-full flex items-center justify-center text-3xl">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-brandcentral-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium text-brandcentral-accent bg-white rounded-full">
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              <AnimatedText
                text="Frequently Asked Questions"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-600">
              Find answers to common questions about our quality control process and services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-subtle">
                <h3 className="text-lg font-medium mb-3">{faq.question}</h3>
                <p className="text-brandcentral-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with background image */}
      <section className="py-20 bg-brandcentral-900 text-white relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">
              <AnimatedText
                text="Ready to start improving your product quality?"
                tag="h2"
              />
            </h2>
            <p className="text-brandcentral-200 mb-8 text-lg">
              Contact us today to schedule an initial consultation and learn how our quality control services can benefit your business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-brandcentral-accent hover:bg-brandcentral-accent/90 text-white">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
