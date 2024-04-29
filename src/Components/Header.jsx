// src/components/Header.js
import React from 'react';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="bg-gray-800">
      <nav>
        <ul className="flex justify-center">
          <li><a href="/" className="text-white px-4 py-2 hover:text-teal-400 transition duration-300">Home</a></li>
          <li><a href="/about" className="text-white px-4 py-2 hover:text-teal-400 transition duration-300">About</a></li>
          <li><a href="/services" className="text-white px-4 py-2 hover:text-teal-400 transition duration-300">Services</a></li>
          <li><a href="/portfolio" className="text-white px-4 py-2 hover:text-teal-400 transition duration-300">Portfolio</a></li>
          <li><a href="/contact" className="text-white px-4 py-2 hover:text-teal-400 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
