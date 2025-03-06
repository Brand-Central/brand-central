
const BrandsTicker = () => {
  return (
    <div className="mt-20 border-y border-brandcentral-100 py-10 bg-white/50 backdrop-blur-sm">
      <div className="container">
        <p className="text-center text-sm text-brandcentral-400 uppercase tracking-wider mb-6">Trusted by industry leaders</p>
        <div className="flex justify-around items-center flex-wrap gap-8 md:gap-16">
          <div className="text-brandcentral-800 font-medium text-lg">Walmart</div>
          <div className="text-brandcentral-800 font-medium text-lg">Amazon</div>
          <div className="text-brandcentral-800 font-medium text-lg">Target</div>
          <div className="text-brandcentral-800 font-medium text-lg">Best Buy</div>
          <div className="text-brandcentral-800 font-medium text-lg">Home Depot</div>
        </div>
      </div>
    </div>
  );
};

export default BrandsTicker;
