
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const ContactForm = () => {
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
    <div className="bg-white p-10 rounded-lg shadow-subtle">
      <h2 className="text-2xl font-semibold mb-8">Send us a message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-brandcentral-700 mb-2">
            Name
          </Label>
          <Input
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
          <Label htmlFor="email" className="text-sm font-medium text-brandcentral-700 mb-2">
            Email
          </Label>
          <Input
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
          <Label htmlFor="company" className="text-sm font-medium text-brandcentral-700 mb-2">
            Company
          </Label>
          <Input
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
          <Label htmlFor="message" className="text-sm font-medium text-brandcentral-700 mb-2">
            Message
          </Label>
          <Textarea
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
  );
};

export default ContactForm;
