const Evalute = () => {
  return (
    <div className="bg-black text-white min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        ELEVATE YOUR STYLE
      </h1>

      {/* Images with text overlay */}
      <div className="flex flex-col md:flex-row justify-end items-start gap-6">
        <div className="relative w-full md:w-1/3 h-70">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="\public\palermo.jpg"
            alt="Puma Style 1"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <p className="text-xl font-bold text-white">PARMELO</p>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-70">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="\public\images (1).jpg"
            alt="Puma Style 2"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <p className="text-xl font-bold text-white">NITRO</p>
          </div>
        </div>

        <div className="relative w-full md:w-1/3 h-70">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="\public\images (2).jpg"
            alt="Puma Style 3"
          />
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <p className="text-xl font-bold text-white">SPEEDCAT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Evalute;
