
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/fnicon.png';

const Header = () => {
  const handleLogoClick = () => {
    // Force page refresh
    window.location.reload();
  };

  return (
    <header className="shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/" onClick={handleLogoClick}>
            <img src={Logo} alt="Company Logo" className="h-[100px] w-[250px] mr-2" />
          </Link>
        </div>

        {/* Navigation Buttons - Hidden on mobile */}
        <div className="hidden md:flex space-x-4 gap-10 text-2xl  me-[30%]">
          <Link to="/" className="hover:text-gray-300 hover:underline">
            Home
          </Link>
          <Link to="/menu" className="hover:text-gray-300 hover:underline">
            Menu
          </Link>
          <Link to="/Fullcontact" className="hover:text-gray-300 hover:underline">
            Contact
          </Link>
        </div>

        {/* Icons Section - Show only on mobile */}
        {/* <div className="flex items-center space-x-4">
          <FiSearch className="text-xl cursor-pointer hover:text-gray-300 size-[35px]" />
          <FiShoppingCart className="text-xl cursor-pointer hover:text-gray-300 size-[35px]" />
        </div> */}

        {/* Mobile Header (Only Logo and Cart) */}
        <div className="md:hidden flex items-center space-x-4">
          {/* <FiShoppingCart className="text-xl cursor-pointer hover:text-gray-300 size-[35px]" /> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
