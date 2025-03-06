
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Helmet } from 'react-helmet';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: '', email: '', company: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Brandcentral</title>
        <meta name="description" content="Get in touch with Brandcentral for test-buying and product quality control services." />
      </Helmet>

      <main className="pt-24 pb-20 relative">
        {/* Page Header */}
        <section className="container mb-16 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-brandcentral-500 max-w-2xl mx-auto">
              Have questions about our services? Ready to start improving your product quality? 
              We're here to help.
            </p>
          </div>
        </section>

        {/* Background image (fixed position) */}
        <div className="fixed inset-0 -z-10">
          <img 
            src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=2832&auto=format&fit=crop" 
            alt="Office background" 
            className="w-full h-full object-cover opacity-5"
          />
        </div>

        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="bg-white p-10 rounded-lg shadow-subtle">
              <h2 className="text-2xl font-semibold mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brandcentral-700 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brandcentral-200 rounded-md focus:ring-2 focus:ring-brandcentral-accent focus:border-transparent transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brandcentral-700 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brandcentral-200 rounded-md focus:ring-2 focus:ring-brandcentral-accent focus:border-transparent transition"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-brandcentral-700 mb-2">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brandcentral-200 rounded-md focus:ring-2 focus:ring-brandcentral-accent focus:border-transparent transition"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brandcentral-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brandcentral-200 rounded-md focus:ring-2 focus:ring-brandcentral-accent focus:border-transparent transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-6 bg-brandcentral-accent text-white rounded-md hover:bg-brandcentral-accent/90 transition-colors disabled:opacity-70 flex justify-center"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col space-y-12">
              <div>
                <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 mt-1 text-brandcentral-accent mr-4" />
                    <div>
                      <p className="font-medium mb-1">Email</p>
                      <a href="mailto:contact@brandcentral.com" className="text-brandcentral-500 hover:text-brandcentral-accent transition-colors">
                        contact@brandcentral.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 mt-1 text-brandcentral-accent mr-4" />
                    <div>
                      <p className="font-medium mb-1">Phone</p>
                      <a href="tel:+18005551234" className="text-brandcentral-500 hover:text-brandcentral-accent transition-colors">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mt-1 text-brandcentral-accent mr-4" />
                    <div>
                      <p className="font-medium mb-1">Location</p>
                      <p className="text-brandcentral-500">
                        123 Quality Avenue<br />
                        New York, NY 10001<br />
                        United States
                      </p>
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
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
