import React from "react";

const Winteraddition = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 uppercase mb-4">
          Season's Must Haves
        </h1>
        <p className="text-lg text-gray-600">
          Stay warm and stylish with our curated winter collection.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="relative">
          <img
            src="\public\gettyimages-1815429049-612x612.jpg"
            alt="winter"
            className="w-full h-[700px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-xl font-bold p-4 rounded">
            Winter Essentials
          </div>
        </div>
        <div className="relative">
          <img
            src="\public\gettyimages-1996550450-612x612.jpg"
            alt="clothings"
            className="w-full h-[700px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-xl font-bold p-4 rounded">
            Stylish Outerwear
          </div>
        </div>
        <div className="relative">
          <img
            src="\public\gettyimages-2147889544-612x612.jpg"
            alt="clothings"
            className="w-full h-[700px] object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white text-xl font-bold p-4 rounded">
            Cozy Knitwear
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winteraddition;
