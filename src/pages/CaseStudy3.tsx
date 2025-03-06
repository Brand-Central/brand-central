
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import AnimatedText from '@/components/ui/AnimatedText';

const CaseStudy3 = () => {
  return (
    <>
      <Helmet>
        <title>Case Study: Improving Product Quality | Brandcentral</title>
        <meta name="description" content="How Brandcentral helped a home goods manufacturer improve product quality and increase customer satisfaction." />
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-brandcentral-50 relative">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1994&auto=format&fit=crop" 
              alt="Home goods quality improvement"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-brandcentral-50 to-brandcentral-50/80"></div>
          </div>
          
          <div className="container relative z-10">
            <div className="flex flex-col max-w-4xl mx-auto">
              <Link to="/case-studies" className="inline-flex items-center text-brandcentral-500 hover:text-brandcentral-accent transition-colors mb-8 self-start">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Case Studies
              </Link>
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-white text-brandcentral-600 rounded-full shadow-sm">
                  Home Goods
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-white text-brandcentral-600 rounded-full shadow-sm">
                  Quality Improvement
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-white text-brandcentral-600 rounded-full shadow-sm">
                  Customer Satisfaction
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <AnimatedText
                  text="Improving Product Quality for a Home Goods Manufacturer"
                  tag="span"
                />
              </h1>
              
              <p className="text-xl text-brandcentral-600 mb-8">
                How our test-buying program helped a leading home goods manufacturer identify and resolve several quality issues, resulting in a 40% decrease in negative reviews and a 25% increase in customer satisfaction scores.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">The Challenge</h2>
                <p className="text-lg text-brandcentral-600 mb-6">
                  A leading home goods manufacturer was experiencing a concerning trend of declining customer reviews and increasing product complaints across their kitchenware product line. Despite internal quality checks, they struggled to identify the specific issues causing customer dissatisfaction.
                </p>
                <p className="text-lg text-brandcentral-600">
                  Key challenges included:
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-2 text-brandcentral-600">
                  <li>Average product rating had dropped from 4.5 to 3.2 stars over six months</li>
                  <li>Customer complaints had increased by 62% year-over-year</li>
                  <li>Internal quality control processes were not identifying the issues customers were experiencing</li>
                  <li>Inconsistent product quality between different retail channels</li>
                  <li>No clear pattern in customer feedback that could explain the decline</li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
                <p className="text-lg text-brandcentral-600 mb-6">
                  Brandcentral designed a comprehensive test-buying and evaluation program:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Multi-Channel Test-Buying</h3>
                    <p className="text-brandcentral-600">
                      We purchased their top 12 products across 8 different retail channels (both online and in-store) to evaluate potential inconsistencies in product quality based on distribution channel.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Comprehensive Product Evaluation</h3>
                    <p className="text-brandcentral-600">
                      Our experts conducted detailed evaluations of each product, assessing everything from unboxing experience to long-term durability through accelerated use testing.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Consumer Panel Testing</h3>
                    <p className="text-brandcentral-600">
                      We assembled consumer panels representing the client's target demographic to use the products and provide detailed feedback on their experience, identifying pain points and areas of disappointment.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Competitor Benchmark Analysis</h3>
                    <p className="text-brandcentral-600">
                      We purchased and evaluated competitor products at similar price points to identify areas where the client's products were falling short of market expectations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Key Findings</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Packaging Transit Damage:</span> 34% of products purchased online showed subtle shipping damage that wasn't immediately apparent but affected product performance over time.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Material Quality Issues:</span> We discovered that a recent change in material suppliers had resulted in lower quality components that degraded more quickly with use.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Design Flaws:</span> Several products had design flaws that only became apparent after regular use, including difficult-to-clean crevices and components that loosened over time.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Quality Control Gaps:</span> The manufacturer's quality control process was focused on initial functionality but missed durability and usability issues that affected customer satisfaction.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Solution Implementation</h2>
                <p className="text-lg text-brandcentral-600 mb-6">
                  Based on our findings, we worked with the manufacturer to implement:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Enhanced Packaging Design</h3>
                    <p className="text-brandcentral-600">
                      We redesigned product packaging to better protect items during shipping, with particular focus on the most vulnerable components identified in our testing.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Material and Component Upgrades</h3>
                    <p className="text-brandcentral-600">
                      We helped the client identify and qualify new suppliers for critical components, establishing strict performance standards and testing protocols.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Product Design Refinements</h3>
                    <p className="text-brandcentral-600">
                      We collaborated with their design team on specific improvements to address usability issues, with particular focus on cleanability, durability, and ease of use.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Expanded Quality Control Program</h3>
                    <p className="text-brandcentral-600">
                      We developed a comprehensive quality control program that included accelerated use testing, real-world simulations, and ongoing test purchases from retail channels.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-semibold mb-6">Results</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-brandcentral-50 p-8 rounded-lg text-center">
                    <div className="text-5xl font-bold text-brandcentral-accent mb-2">40%</div>
                    <p className="text-xl font-medium">Reduction in Negative Reviews</p>
                    <p className="text-brandcentral-600 mt-2">Within 3 months of implementation</p>
                  </div>
                  
                  <div className="bg-brandcentral-50 p-8 rounded-lg text-center">
                    <div className="text-5xl font-bold text-brandcentral-accent mb-2">25%</div>
                    <p className="text-xl font-medium">Increase in Customer Satisfaction</p>
                    <p className="text-brandcentral-600 mt-2">As measured by post-purchase surveys</p>
                  </div>
                </div>
                
                <p className="text-lg text-brandcentral-600 mb-6">
                  Additional outcomes included:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-brandcentral-600 mb-8">
                  <li>Average product ratings improved from 3.2 to 4.4 stars within six months</li>
                  <li>Product returns decreased by 32%</li>
                  <li>Warranty claims reduced by 47%</li>
                  <li>Retailer relationships strengthened, with two major retailers increasing order volumes by 18%</li>
                  <li>Implementation of an ongoing test-buying program to continually monitor product quality</li>
                </ul>
                
                <div className="bg-brandcentral-accent/10 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-medium mb-3">Client Feedback</h3>
                  <p className="text-lg italic text-brandcentral-700 mb-4">
                    "Brandcentral's test-buying program gave us insight into quality issues that our internal testing never detected. By experiencing our products exactly as our customers do, they identified critical improvement opportunities that have transformed our approach to quality control and product development."
                  </p>
                  <p className="font-medium">Chief Quality Officer</p>
                </div>
                
                <div className="text-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-brandcentral-accent hover:bg-brandcentral-accent/90 text-white">
                      Improve Your Product Quality
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaseStudy3;
