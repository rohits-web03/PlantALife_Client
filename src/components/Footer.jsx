import React from 'react';
import { navLinks } from '../constants/index';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2024 PlantALife. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          {navLinks.map((link, index) => (
            <a key={index} href={link.href} className="hover:text-green-500 transition duration-300 ease-in-out">{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
