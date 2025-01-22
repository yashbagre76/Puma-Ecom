import React from "react";

const Colabs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Heading Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 uppercase mb-4">
          Rep Your Team
        </h1>
        <p className="text-lg text-gray-600">
          Celebrate your favorite teams with exclusive collaborations.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="relative w-full h-[500px]">
          <img
            src="/public/gettyimages-97866817-612x612.jpg"
            alt="Portugal"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <p className="text-xl font-bold text-white">PORTUGAL</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative w-full h-[500px]">
          <img
            src="/public/gettyimages-1474694561-612x612.jpg"
            alt="France"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <p className="text-xl font-bold text-white">FRANCE</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative w-full h-[500px]">
          <img
            src="/public/gettyimages-2193665858-612x612.jpg"
            alt="Brazil"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <p className="text-xl font-bold text-white">BRAZIL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Colabs;
