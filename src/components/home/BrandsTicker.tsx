
import { Check } from 'lucide-react';

const BrandsTicker = () => {
  return (
    <div className="mt-20 border-y border-brandcentral-100 py-10 bg-gradient-to-r from-white via-brandcentral-50/30 to-white backdrop-blur-sm">
      <div className="container">
        <p className="text-center text-sm text-brandcentral-500 uppercase tracking-wider mb-6 font-medium">Trusted by industry leaders</p>
        <div className="flex justify-around items-center flex-wrap gap-8 md:gap-16">
          {['Walmart', 'Amazon', 'Target', 'Best Buy', 'Home Depot'].map((brand, index) => (
            <div key={index} className="flex items-center">
              <Check className="w-5 h-5 mr-2 text-brandcentral-accent" />
              <span className="text-brandcentral-800 font-medium text-lg">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsTicker;
