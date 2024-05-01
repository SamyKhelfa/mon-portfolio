// src/components/Header.js
import React, { useState } from 'react';
import '../styles/header.css';
import menuIcon from '../assets/menu.png'; // Assure-toi que le chemin est correct
import franceFlag from '../assets/france-flag.webp'; // Assure-toi que le chemin est correct

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [showLanguageTip, setShowLanguageTip] = useState(false);

  return (
    <header className="bg-gray-800 text-white">
      <div className="flex justify-between items-center p-2">
        <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden -ml-7">
          <img src={menuIcon} alt="Menu" className="h-6 w-6" />
        </button>

        <nav className="flex-grow">
          <ul className="flex justify-center space-x-10">
            <li><a href="#home" className="hover:text-teal-400 transition duration-300">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400 transition duration-300">About</a></li>
            <li><a href="#services" className="hover:text-teal-400 transition duration-300">Services</a></li>
            <li><a href="#portfolio" className="hover:text-teal-400 transition duration-300">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-teal-400 transition duration-300">Contact</a></li>
          </ul>
        </nav>

        <div className="relative">
          <div onMouseEnter={() => setShowLanguageTip(true)} onMouseLeave={() => setShowLanguageTip(false)} className="flex items-center justify-end ml-4">
            <img src={franceFlag} alt="French Flag" className="h-6 w-6 cursor-pointer" />
          </div>
          {showLanguageTip && (
            <div className="absolute right-0 top-full mt-2 w-max bg-black text-white text-sm p-2 border rounded">
              Vous ne maîtrisez pas la langue de Shakespeare ? Cliquez ici.
            </div>
          )}
        </div>

        {isNavOpen && (
          <div className="absolute top-0 left-0 mt-12 w-full bg-gray-800 md:hidden">
            <ul className="flex flex-col items-start pl-4 py-2">
              <li><a href="#home" className="text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Home</a></li>
              <li><a href="#about" className="text-white px-4 py-2 hover:bg-gray-700 transition duration-300">About</a></li>
              <li><a href="#services" className="text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Services</a></li>
              <li><a href="#portfolio" className="text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Portfolio</a></li>
              <li><a href="#contact" className="text-white px-4 py-2 hover:bg-gray-700 transition duration-300">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
