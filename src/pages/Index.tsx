
import HeroSection from '@/components/home/HeroSection';
import BrandsTicker from '@/components/home/BrandsTicker';
import CompanyOverview from '@/components/home/CompanyOverview';
import ServicesSection from '@/components/home/ServicesSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <HeroSection />
      <BrandsTicker />
      
      {/* Company Overview */}
      <CompanyOverview />
      
      {/* Services Overview */}
      <ServicesSection />
      
      {/* CTA Section */}
      <CTASection />
    </main>
  );
};

export default Index;
