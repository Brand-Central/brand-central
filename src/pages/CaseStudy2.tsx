
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Helmet } from 'react-helmet';
import AnimatedText from '@/components/ui/AnimatedText';

const CaseStudy2 = () => {
  return (
    <>
      <Helmet>
        <title>Case Study: Ensuring Compliance | Brandcentral</title>
        <meta name="description" content="Learn how Brandcentral helped a global beauty brand ensure regulatory compliance before launching in new markets." />
      </Helmet>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="py-16 md:py-20 bg-brandcentral-50 relative">
          <div className="absolute inset-0 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=2070&auto=format&fit=crop" 
              alt="Beauty products compliance"
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
                  Beauty
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-white text-brandcentral-600 rounded-full shadow-sm">
                  Compliance
                </span>
                <span className="px-3 py-1 text-xs font-medium bg-white text-brandcentral-600 rounded-full shadow-sm">
                  Global Markets
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                <AnimatedText
                  text="Ensuring Compliance for a Global Beauty Brand"
                  tag="span"
                />
              </h1>
              
              <p className="text-xl text-brandcentral-600 mb-8">
                How our compliance assessment services helped a prestigious beauty brand identify and address potential regulatory issues before launching in new markets, ensuring smooth market entry and avoiding costly delays.
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
                  A prestigious global beauty brand was planning to expand their premium skincare line into five new international markets with varying regulatory requirements. Their previous expansion attempts had encountered costly delays and compliance issues, resulting in missed market opportunities and significant financial losses.
                </p>
                <p className="text-lg text-brandcentral-600">
                  Key challenges included:
                </p>
                <ul className="list-disc pl-8 mt-4 space-y-2 text-brandcentral-600">
                  <li>Complex and varying regulatory requirements across different countries</li>
                  <li>Product formulations containing ingredients that faced restrictions in certain markets</li>
                  <li>Packaging and labeling requirements that differed significantly by region</li>
                  <li>Marketing claims that needed validation according to local standards</li>
                  <li>Previous compliance issues that had cost the company approximately $1.8M in remediation and delayed launches</li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Our Approach</h2>
                <p className="text-lg text-brandcentral-600 mb-6">
                  Brandcentral developed a comprehensive compliance assessment strategy:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Regulatory Landscape Analysis</h3>
                    <p className="text-brandcentral-600">
                      We conducted an in-depth analysis of regulatory requirements in each target market, creating detailed compliance frameworks for product formulation, packaging, labeling, and marketing claims.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Product Formulation Assessment</h3>
                    <p className="text-brandcentral-600">
                      Our team of cosmetic chemists and regulatory experts reviewed all product formulations against regional restricted ingredients lists and concentration limitations.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Packaging and Labeling Evaluation</h3>
                    <p className="text-brandcentral-600">
                      We thoroughly reviewed all packaging elements and labeling against local requirements, including ingredient disclosure, warning statements, and language requirements.
                    </p>
                  </div>
                  
                  <div className="p-6 bg-brandcentral-50 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Marketing Claims Validation</h3>
                    <p className="text-brandcentral-600">
                      We assessed all marketing claims against local advertising regulations and substantiation requirements, identifying areas that needed additional validation or modification.
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
                      <span className="font-medium">Ingredient Compliance:</span> Three key active ingredients exceeded permissible concentration limits in two target markets, requiring reformulation.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Packaging Compliance:</span> Primary packaging for their flagship product contained materials restricted in one market, requiring alternative packaging solutions.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Labeling Requirements:</span> Significant variances in mandatory warning statements and ingredient disclosure requirements across all target markets.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-brandcentral-accent mr-3 mt-1 flex-shrink-0" />
                    <p className="text-brandcentral-600">
                      <span className="font-medium">Marketing Claims:</span> 38% of their marketing claims lacked sufficient substantiation according to the standards of three target markets.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-12">
                <h2 className="text-3xl font-semibold mb-6">Solution Implementation</h2>
                <p className="text-lg text-brandcentral-600 mb-6">
                  Based on our comprehensive assessment, we implemented:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Reformulation Strategy</h3>
                    <p className="text-brandcentral-600">
                      We worked with their R&D team to develop market-specific formulations that maintained efficacy while complying with regional restrictions, creating a matrix of permitted ingredients and concentration limits.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Packaging Solutions</h3>
                    <p className="text-brandcentral-600">
                      We identified alternative packaging materials that met both their brand standards and regulatory requirements across all markets, working with suppliers to ensure availability and cost-effectiveness.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Market-Specific Labeling Strategy</h3>
                    <p className="text-brandcentral-600">
                      We developed a comprehensive labeling strategy that addressed all regional requirements while maintaining brand consistency, including a modular approach to warning statements and ingredient disclosure.
                    </p>
                  </div>
                  
                  <div className="p-6 border border-brandcentral-100 rounded-lg">
                    <h3 className="text-xl font-medium mb-3">Claims Substantiation Program</h3>
                    <p className="text-brandcentral-600">
                      We established a rigorous claims substantiation program that met the highest regional standards, conducting additional testing where needed and refining marketing claims to ensure compliance.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-semibold mb-6">Results</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-brandcentral-50 p-8 rounded-lg text-center">
                    <div className="text-5xl font-bold text-brandcentral-accent mb-2">100%</div>
                    <p className="text-xl font-medium">Compliance Success</p>
                    <p className="text-brandcentral-600 mt-2">Across all five target markets</p>
                  </div>
                  
                  <div className="bg-brandcentral-50 p-8 rounded-lg text-center">
                    <div className="text-5xl font-bold text-brandcentral-accent mb-2">4 Months</div>
                    <p className="text-xl font-medium">Time Saved</p>
                    <p className="text-brandcentral-600 mt-2">Compared to previous market entries</p>
                  </div>
                </div>
                
                <p className="text-lg text-brandcentral-600 mb-6">
                  Additional outcomes included:
                </p>
                <ul className="list-disc pl-8 space-y-2 text-brandcentral-600 mb-8">
                  <li>Successful simultaneous launch in all five target markets</li>
                  <li>No product recalls or compliance issues post-launch</li>
                  <li>Cost savings of approximately $2.3M by avoiding remediation and market reentry costs</li>
                  <li>Development of a comprehensive compliance framework that could be applied to future expansions</li>
                  <li>Increased confidence from retail partners due to flawless regulatory compliance</li>
                </ul>
                
                <div className="bg-brandcentral-accent/10 p-8 rounded-lg mb-8">
                  <h3 className="text-xl font-medium mb-3">Client Feedback</h3>
                  <p className="text-lg italic text-brandcentral-700 mb-4">
                    "Brandcentral transformed our approach to international compliance. Their thorough assessment and practical solutions not only ensured a smooth market entry but have become the foundation of our global expansion strategy. For the first time, we launched in multiple markets without a single compliance issue."
                  </p>
                  <p className="font-medium">Director of International Business Development</p>
                </div>
                
                <div className="text-center">
                  <Link to="/contact">
                    <Button size="lg" className="bg-brandcentral-accent hover:bg-brandcentral-accent/90 text-white">
                      Discuss Your Compliance Needs
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

export default CaseStudy2;
