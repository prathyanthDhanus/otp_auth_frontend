// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-sm">
            © {new Date().getFullYear()} My Website. All rights reserved.
          </p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="text-gray-400 hover:text-white">
            About
          </a>
          <a href="/services" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white">
            Contact
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
