const Hero = () => {
  return (
    <div className="relative">
      {/* Hero Image */}
      <img
        src="/public/ecom.avif"
        alt="Hero Image"
        className="w-full h-auto object-cover"
      />

      {/* Text and Buttons Section */}
      <div className="absolute inset-0 flex flex-col items-center justify-center space-y-6 text-center">
        {/* Hero Text */}
        <div className="space-y-2">
          <h1 className="text-white text-4xl font-bold bg-black bg-opacity-50 px-6 py-3 rounded-md">
            Flat 40% Off
          </h1>
          <h3 className="text-white text-xl font-medium bg-black bg-opacity-50 px-6 py-2 rounded-md">
            + EXTRA 5% OFF on Online Pay
          </h3>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold shadow-md hover:bg-blue-700">
            For Him
          </button>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold shadow-md hover:bg-blue-700">
            For Her
          </button>
          <button className="px-8 py-3 bg-blue-600 text-white rounded-md text-lg font-semibold shadow-md hover:bg-blue-700">
            For Kids
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
