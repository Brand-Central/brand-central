
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brandcentral-950 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4">
              <span className="text-white font-semibold text-xl tracking-tight">Brand</span>
              <span className="text-brandcentral-accent">central</span>
            </Link>
            <p className="text-brandcentral-300 mb-4 max-w-md">
              Brandcentral provides comprehensive test-buying and product quality control services to help businesses ensure their products meet rigorous standards and exceed customer expectations.
            </p>
            <div className="flex flex-col space-y-2">
              <a href="tel:+12536668753" className="inline-flex items-center text-brandcentral-300 hover:text-brandcentral-accent transition-custom">
                <Phone className="w-4 h-4 mr-2" />
                <span>(253) 666-8753</span>
              </a>
              <a href="mailto:hello@brandcentral.com" className="inline-flex items-center text-brandcentral-300 hover:text-brandcentral-accent transition-custom">
                <Mail className="w-4 h-4 mr-2" />
                <span>hello@brandcentral.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Services</Link>
              </li>
              <li>
                <Link to="/case-studies" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Case Studies</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">How It Works</Link>
              </li>
              <li>
                <Link to="/contact" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-medium text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#test-buying" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Test Buying</Link>
              </li>
              <li>
                <Link to="/services#quality-control" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Quality Control</Link>
              </li>
              <li>
                <Link to="/services#compliance" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Compliance Assessment</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Consulting Services</Link>
              </li>
              <li>
                <Link to="/services#reporting" className="text-brandcentral-300 hover:text-brandcentral-accent transition-custom">Reporting & Analytics</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brandcentral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brandcentral-400 text-sm">
            &copy; {currentYear} Brandcentral. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-brandcentral-400 hover:text-brandcentral-accent transition-custom">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-brandcentral-400 hover:text-brandcentral-accent transition-custom">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
