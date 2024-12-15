import React from 'react';
import Logo from '../../assets/fnicon.png';

const Footer = () => {
  return (
    <footer className="m-10 py-10 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        {/* Logo and Text Section */}
        <div className="flex flex-col items-start">
          <img src={Logo} alt="Company Logo" className="h-[100px]  mb-4" />
          <p className="text-sm text-gray-400 font-bold">
            We are committed to providing the best services to our customers. Our mission is to deliver excellence with every project we undertake.
          </p>
        </div>

        {/* Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-32  pl-20">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 ">About</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Our Story</li>
              <li>Team</li>
              <li>Careers</li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Email: contact@example.com</li>
              <li>Phone: +123 456 7890</li>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
