
import { Helmet } from 'react-helmet';
import ContactHeader from '@/components/contact/ContactHeader';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Brandcentral</title>
        <meta name="description" content="Get in touch with Brandcentral for test-buying and product quality control services." />
      </Helmet>

      <main className="pt-24 pb-20 relative">
        {/* Page Header */}
        <ContactHeader />

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
            <ContactForm />

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
