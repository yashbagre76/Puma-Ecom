import { useRef } from "react";

const Spotlight = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative p-4">
      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 z-10"
      >
        &#8592;
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="overflow-x-auto whitespace-nowrap flex space-x-4 scrollbar-hide p-4"
      >
        {/* Spotlight Items */}
        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/Mercedes-AMG-Petronas-F1®-Tiburion-Unisex-Motorsport-Sneakers.avif"
            alt="Mercedes shoes"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Mercedes Shoes</h3>
            <p className="text-gray-500">Price: ₹4,999</p>
            <p className="text-green-500">Discount: 30% Off</p>
          </div>
        </div>

        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/Softride-Premier-one8-Res-Unisex-Running-Shoes.avif"
            alt="Running shoes"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Running Shoes</h3>
            <p className="text-gray-500">Price: ₹3,499</p>
            <p className="text-green-500">Discount: 25% Off</p>
          </div>
        </div>

        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/images.jpg"
            alt="Shoes 2"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Casual Shoes</h3>
            <p className="text-gray-500">Price: ₹2,799</p>
            <p className="text-green-500">Discount: 20% Off</p>
          </div>
        </div>

        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/PUMA-x-one8-Men's-Colorblock-Pants.avif"
            alt="Pants"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Puma Pants</h3>
            <p className="text-gray-500">Price: ₹1,999</p>
            <p className="text-green-500">Discount: 15% Off</p>
          </div>
        </div>

        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/Mercedes-AMG-PETRONAS-Men's-Motorsport-Hoodie.avif"
            alt="Hoodie"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Mercedes Hoodie</h3>
            <p className="text-gray-500">Price: ₹5,499</p>
            <p className="text-green-500">Discount: 40% Off</p>
          </div>
        </div>

        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/download (1).jpg"
            alt="Shoes 12"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Sports Shoes</h3>
            <p className="text-gray-500">Price: ₹3,199</p>
            <p className="text-green-500">Discount: 18% Off</p>
          </div>
        </div>

        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/download (3).jpg"
            alt="Hoodie"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Warm Hoodie</h3>
            <p className="text-gray-500">Price: ₹3,999</p>
            <p className="text-green-500">Discount: 28% Off</p>
          </div>
        </div>

        <div className="w-48">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            src="/public/download (4).jpg"
            alt="Hoodie"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-semibold">Premium Hoodie</h3>
            <p className="text-gray-500">Price: ₹6,299</p>
            <p className="text-green-500">Discount: 35% Off</p>
          </div>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 z-10"
      >
        &#8594;
      </button>
    </div>
  );
};

export default Spotlight;
