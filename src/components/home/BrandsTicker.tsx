
import { Check } from 'lucide-react';

const BrandsTicker = () => {
  return (
    <div className="mt-20 border-y border-brandcentral-100 py-10 bg-gradient-to-r from-white via-brandcentral-50/30 to-white backdrop-blur-sm relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-brandcentral-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-10 w-60 h-60 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10">
        <p className="text-center text-sm text-brandcentral-500 uppercase tracking-wider mb-6 font-medium">Trusted by industry leaders</p>
        <div className="flex justify-around items-center flex-wrap gap-8 md:gap-16">
          {['eBay', 'Amazon', 'Target', 'Best Buy', 'Home Depot'].map((brand, index) => (
            <div key={index} className="flex items-center group hover:scale-105 transition-transform">
              <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full shadow-md mr-2 group-hover:bg-brandcentral-accent/10">
                <Check className="w-5 h-5 text-brandcentral-accent" />
              </div>
              <span className="text-brandcentral-800 font-medium text-lg">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsTicker;
