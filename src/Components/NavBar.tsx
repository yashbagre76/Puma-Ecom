const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <img
              src="public/download (1).png"
              alt="logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Trending
            </a>
            <a
              href="#women"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Women
            </a>
            <a
              href="#men"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Men
            </a>
            <a
              href="#kid"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Kids
            </a>
            <a
              href="#motorsport"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              MotorSport
            </a>
            <a
              href="#outlet"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Outlet
            </a>
            <a
              href="#collaboration"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Collaboration
            </a>
            <a
              href="#sports"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
            >
              Sports
            </a>
          </div>

          {/* Action Buttons */}
          <div className="ml-4 flex space-x-4">
            <button className="text-gray-700 hover:text-gray-900 bg-gray-100 px-4 py-2 rounded-md text-sm font-semibold">
              Cart
            </button>
            <button className="text-gray-700 hover:text-gray-900 bg-gray-100 px-4 py-2 rounded-md text-sm font-semibold">
              WishList
            </button>
            <button className="text-gray-700 hover:text-gray-900 bg-gray-100 px-4 py-2 rounded-md text-sm font-semibold">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
