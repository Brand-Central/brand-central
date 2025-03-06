
import { supabase } from "@/lib/supabase";
import { useAuth } from "@/contexts/AuthContext";

// This is a utility to import existing static pages to the CMS
// Pages to import with their content
const pagesToImport = [
  {
    title: "Home",
    slug: "home",
    meta_description: "Brandcentral - Quality control and test-buying services for global brands.",
    content: {
      html: `
      <div>
        <h1>Brandcentral</h1>
        <p>Brandcentral is a quality control and test-buying service provider for global brands. We help ensure your products meet the highest standards and comply with all regulations.</p>
        <h2>Our Services</h2>
        <ul>
          <li>Test-buying programs</li>
          <li>Quality control inspections</li>
          <li>Regulatory compliance reviews</li>
          <li>Brand protection services</li>
        </ul>
        <p>Contact us today to learn how we can help protect and enhance your brand's reputation.</p>
      </div>
      `
    },
    is_published: true
  },
  {
    title: "Services",
    slug: "services",
    meta_description: "Comprehensive quality control and test-buying services for brands worldwide.",
    content: {
      html: `
      <div>
        <h1>Our Services</h1>
        <p>At Brandcentral, we offer a comprehensive suite of quality control and brand protection services.</p>
        
        <h2>Test-Buying Programs</h2>
        <p>Our test-buying programs help you monitor product quality and consistency across different markets and sales channels.</p>
        
        <h2>Quality Control</h2>
        <p>Ensure your products meet your exact specifications and quality standards with our thorough inspection services.</p>
        
        <h2>Compliance Reviews</h2>
        <p>Stay ahead of regulatory requirements with our compliance assessment services for product labeling, safety, and more.</p>
        
        <h2>Brand Protection</h2>
        <p>Identify counterfeit products and unauthorized sellers to protect your brand's integrity and customer trust.</p>
        
        <h2>Consulting</h2>
        <p>Our expert consultants can help you develop and implement effective quality control processes tailored to your specific needs.</p>
      </div>
      `
    },
    is_published: true
  },
  {
    title: "How It Works",
    slug: "how-it-works",
    meta_description: "Learn about our quality control and test-buying process.",
    content: {
      html: `
      <div>
        <h1>How It Works</h1>
        <p>Our streamlined process makes it easy to ensure your products meet the highest quality standards:</p>
        
        <h2>1. Initial Consultation</h2>
        <p>We begin with a detailed discussion about your brand, products, and specific quality concerns to develop a customized approach.</p>
        
        <h2>2. Program Design</h2>
        <p>Our team designs a tailored quality control program that addresses your unique needs and objectives.</p>
        
        <h2>3. Implementation</h2>
        <p>We execute the program, conducting test purchases, quality inspections, or compliance reviews as needed.</p>
        
        <h2>4. Detailed Reporting</h2>
        <p>You'll receive comprehensive reports with our findings, including photos, test results, and specific observations.</p>
        
        <h2>5. Recommendations</h2>
        <p>Based on our findings, we provide actionable recommendations to improve product quality, compliance, or brand protection.</p>
        
        <h2>6. Ongoing Monitoring</h2>
        <p>We can continue to monitor your products and sales channels to ensure sustained quality and compliance.</p>
      </div>
      `
    },
    is_published: true
  },
  {
    title: "Case Studies",
    slug: "case-studies",
    meta_description: "Real-world examples of how we've helped brands improve quality and protect their reputation.",
    content: {
      html: `
      <div>
        <h1>Case Studies & Testimonials</h1>
        <p>Discover how our quality control services have helped businesses across various industries improve their products and build customer trust.</p>
        
        <h2>Case Study 1: Reducing Product Returns for a Major Electronics Retailer</h2>
        <p>Through our comprehensive quality control program, we helped a major electronics retailer reduce product returns by 35% within six months, resulting in significant cost savings and improved customer satisfaction.</p>
        
        <h2>Case Study 2: Ensuring Compliance for a Global Beauty Brand</h2>
        <p>Our compliance assessment services helped a global beauty brand identify and address potential regulatory issues before launching in new markets, ensuring smooth market entry and avoiding costly delays.</p>
        
        <h2>Case Study 3: Improving Product Quality for a Home Goods Manufacturer</h2>
        <p>By implementing our test-buying program, a home goods manufacturer was able to identify and resolve several quality issues, resulting in a 40% decrease in negative reviews and a 25% increase in customer satisfaction scores.</p>
        
        <h2>Testimonials</h2>
        <blockquote>
          "Brandcentral's thorough test-buying program helped us identify several issues with our product packaging that we would have otherwise missed. Their detailed reports and actionable recommendations were invaluable."
          <cite>- Sarah Johnson, Product Director, Consumer Electronics Company</cite>
        </blockquote>
        
        <blockquote>
          "We've been working with Brandcentral for over three years, and their quality control services have consistently helped us maintain high standards across our product line. Their attention to detail is unmatched."
          <cite>- David Chen, Quality Assurance Manager, Home Goods Manufacturer</cite>
        </blockquote>
      </div>
      `
    },
    is_published: true
  },
  {
    title: "Contact",
    slug: "contact",
    meta_description: "Get in touch with Brandcentral for test-buying and product quality control services.",
    content: {
      html: `
      <div>
        <h1>Contact Us</h1>
        <p>Ready to ensure your products meet the highest quality standards? Get in touch with our team today.</p>
        
        <h2>Contact Information</h2>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@brandcentral.com</p>
        <p>Address: 123 Quality Control St, Suite 100, New York, NY 10001</p>
        
        <h2>Office Hours</h2>
        <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
        <p>Saturday - Sunday: Closed</p>
        
        <h2>International Offices</h2>
        <ul>
          <li>London, UK</li>
          <li>Hong Kong, China</li>
          <li>Sydney, Australia</li>
          <li>Frankfurt, Germany</li>
        </ul>
      </div>
      `
    },
    is_published: true
  }
];

// Function to import pages to CMS
export const importPagesToCMS = async (userId: string) => {
  try {
    // Check if pages already exist to avoid duplicates
    const { data: existingPages, error: checkError } = await supabase
      .from('pages')
      .select('slug');
    
    if (checkError) {
      console.error('Error checking existing pages:', checkError);
      throw checkError;
    }
    
    const existingSlugs = existingPages.map(page => page.slug);
    
    // Filter out pages that already exist in the CMS
    const pagesToAdd = pagesToImport.filter(page => !existingSlugs.includes(page.slug));
    
    if (pagesToAdd.length === 0) {
      console.log('All pages already exist in the CMS.');
      return { success: true, message: 'All pages already exist in the CMS.' };
    }
    
    // Add author_id and timestamps to each page
    const pagesWithMetadata = pagesToAdd.map(page => ({
      ...page,
      author_id: userId,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }));
    
    // Insert pages into the database
    const { data, error } = await supabase
      .from('pages')
      .insert(pagesWithMetadata)
      .select();
    
    if (error) {
      console.error('Error importing pages to CMS:', error);
      throw error;
    }
    
    return { 
      success: true,
      message: `Successfully imported ${data.length} pages to the CMS.`,
      importedPages: data
    };
  } catch (error) {
    console.error('Error in importPagesToCMS:', error);
    return { 
      success: false, 
      message: error.message || 'Failed to import pages to CMS.',
      error
    };
  }
};
