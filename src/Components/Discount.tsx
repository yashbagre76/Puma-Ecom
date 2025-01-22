const Discount = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Circular Buttons with Labels */}
      <h2 className="text-4xl font-bold uppercase text-center text-gray-800 mb-6">
        COOL STYLE, HOT DISCOUNTS
      </h2>
      <div className="flex space-x-6 mb-6">
        <div className="flex flex-col items-center">
          <button className="w-20 h-20 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300">
            SNEAKERS
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-20 h-20 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300">
            SPORTS
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-20 h-20 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300">
            BMW
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-20 h-20 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300">
            JERSEYS
          </button>
        </div>
        <div className="flex flex-col items-center">
          <button className="w-20 h-20 bg-pink-500 text-white font-semibold rounded-full hover:bg-pink-600 transition duration-300">
            HOODIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
