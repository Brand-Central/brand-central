
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import AnimatedText from '@/components/ui/AnimatedText';

const CaseStudy1 = () => {
  return (
    <>
      <Helmet>
        <title>Case Study: Reducing Product Returns | Brandcentral</title>
        <meta name="description" content="Learn how Brandcentral helped a major electronics retailer reduce product returns by 35% through comprehensive quality control." />
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-brandcentral-50 relative">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" 
              alt="Electronics quality control"
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
                  Electronics
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-white text-brandcentral-600 rounded-full shadow-sm">
                  Quality Control
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-white text-brandcentral-600 rounded-full shadow-sm">
                  Return Reduction
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <AnimatedText
                  text="Reducing Product Returns for a Major Electronics Retailer"
                  tag="span"
                />
              </h1>
              
              <p className="text-xl text-brandcentral-600 mb-8">
                How our comprehensive quality control program helped a prominent big-box retailer reduce product returns by 35% within six months, resulting in significant cost savings and improved customer satisfaction.
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
                  A prominent big-box electronics retailer was experiencing an unusually high rate of product returns across their private label electronics line. This led to significant financial losses and was negatively impacting customer trust in their brand. The retailer needed to identify the root causes of these returns and implement a comprehensive solution to address them.
                </p>
                <p className="text-lg text-brandcentral-600">
                  Key challenges included:
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-2 text-brandcentral-600">
                  <li>Return rates approximately 22% higher than industry average</li>
                  <li>Inconsistent quality control across different manufacturing partners</li>
                  <li>Limited visibility into actual consumer experience with products</li>
                  <li>Unclear patterns in return reasons provided by customers</li>
                  <li>Significant financial impact: approximately $3.2M in yearly losses</li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
                <p className="text-lg text-brandcentral-600 mb-6">
                  Brandcentral developed a multi-faceted approach to tackle the retailer's challenges:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Comprehensive Test-Buying Program</h3>
                    <p className="text-brandcentral-600">
                      We implemented a systematic test-buying program across 18 retail locations and their online store. Our quality assurance experts purchased products as regular consumers would, providing insight into the actual customer experience.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">In-Depth Quality Assessment</h3>
                    <p className="text-brandcentral-600">
                      Each purchased product underwent rigorous evaluation for packaging integrity, product functionality, user experience, and documentation clarity. We tested not just against technical specifications but also assessed the overall consumer experience.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Consumer Experience Mapping</h3>
                    <p className="text-brandcentral-600">
                      Our team created detailed journey maps of the consumer experience from purchase to setup and usage, identifying potential friction points that could lead to returns.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Data Analysis</h3>
                    <p className="text-brandcentral-600">
                      By correlating our findings with the retailer's return data, we identified specific patterns and root causes of returns that weren't apparent from customer feedback alone.
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
                      <span className="font-medium">Packaging Issues:</span> 42% of returns were related to products damaged during shipping due to inadequate packaging design.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Unclear Instructions:</span> 27% of returns were attributed to consumers being unable to properly set up or use the product due to confusing documentation.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Quality Inconsistency:</span> 18% of returns were due to actual product defects that varied significantly between manufacturing batches.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Feature Misalignment:</span> 13% of returns happened because product features didn't align with consumer expectations set by marketing materials.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Solution Implementation</h2>
                <p className="text-lg text-brandcentral-600 mb-6">
                  Based on our findings, we worked with the retailer to implement several targeted solutions:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Packaging Redesign</h3>
                    <p className="text-brandcentral-600">
                      We collaborated with their packaging team to redesign product packaging for their top 15 most-returned items, focusing on better protection during shipping while maintaining cost efficiency.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Documentation Overhaul</h3>
                    <p className="text-brandcentral-600">
                      Our technical writing team rewrote user manuals and quick-start guides for clarity, incorporating visual guides and simplified language. We also created video tutorials for complex products.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Supplier Quality Program</h3>
                    <p className="text-brandcentral-600">
                      We established a standardized quality control process for their manufacturing partners, including regular blind test purchases and evaluations to maintain consistency.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Marketing Alignment</h3>
                    <p className="text-brandcentral-600">
                      We helped align product marketing materials with actual product capabilities to set appropriate consumer expectations.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-semibold mb-6">Results</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-brandcentral-50 p-8 rounded-lg text-center">
                    <div className="text-5xl font-bold text-brandcentral-accent mb-2">35%</div>
                    <p className="text-xl font-medium">Reduction in Returns</p>
                    <p className="text-brandcentral-600 mt-2">Within six months of implementation</p>
                  </div>
                  
                  <div className="bg-brandcentral-50 p-8 rounded-lg text-center">
                    <div className="text-5xl font-bold text-brandcentral-accent mb-2">$2.1M</div>
                    <p className="text-xl font-medium">Annual Savings</p>
                    <p className="text-brandcentral-600 mt-2">In reduced processing and restocking costs</p>
                  </div>
                </div>
                
                <p className="text-lg text-brandcentral-600 mb-6">
                  Additional outcomes included:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-brandcentral-600 mb-8">
                  <li>28% increase in positive product reviews</li>
                  <li>Customer satisfaction scores for their private label electronics improved from 3.2/5 to 4.1/5</li>
                  <li>Better brand perception with a 42% reduction in negative social media mentions</li>
                  <li>Implementation of long-term quality control processes that continue to maintain the lower return rates</li>
                </ul>
                
                <div className="bg-brandcentral-accent/10 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-medium mb-3">Client Feedback</h3>
                  <p className="text-lg italic text-brandcentral-700 mb-4">
                    "Brandcentral's approach uncovered issues we had completely missed in our internal analysis. Their comprehensive solution not only reduced our return rates significantly but has changed how we approach product development and quality control across our entire organization."
                  </p>
                  <p className="font-medium">VP of Product Development</p>
                </div>
                
                <div className="text-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-brandcentral-accent hover:bg-brandcentral-accent/90 text-white">
                      Discuss Your Quality Control Needs
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

export default CaseStudy1;
