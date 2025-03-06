
import { Mail, Phone, Clock } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="flex flex-col space-y-12">
      <div>
        <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
        <div className="space-y-8">
          <div className="flex items-start">
            <Mail className="w-5 h-5 mt-1 text-brandcentral-accent mr-4" />
            <div>
              <p className="font-medium mb-1">Email</p>
              <a href="mailto:hello@brandcentral.com" className="text-brandcentral-500 hover:text-brandcentral-accent transition-colors">
                hello@brandcentral.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="w-5 h-5 mt-1 text-brandcentral-accent mr-4" />
            <div>
              <p className="font-medium mb-1">Phone</p>
              <a href="tel:+12536668753" className="text-brandcentral-500 hover:text-brandcentral-accent transition-colors">
                +1 (253) 666-8753
              </a>
            </div>
          </div>
          
          <div className="flex items-start">
            <Clock className="w-5 h-5 mt-1 text-brandcentral-accent mr-4" />
            <div>
              <p className="font-medium mb-1">Business Hours</p>
              <p className="text-brandcentral-500">
                Monday - Friday: 9AM - 6PM EST<br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4">Quality Assurance Partners</h3>
        <p className="text-brandcentral-500 mb-6">
          We work with leading retailers and marketplaces to ensure product quality and brand consistency.
        </p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded text-sm text-brandcentral-500">Amazon</div>
          <div className="bg-gray-100 py-2 px-4 rounded text-sm text-brandcentral-500">Walmart</div>
          <div className="bg-gray-100 py-2 px-4 rounded text-sm text-brandcentral-500">Target</div>
          <div className="bg-gray-100 py-2 px-4 rounded text-sm text-brandcentral-500">Best Buy</div>
        </div>
      </div>
      
      <div className="mt-8 rounded-lg overflow-hidden shadow-subtle">
        <img 
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop" 
          alt="Our office" 
          className="w-full h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default ContactInfo;
