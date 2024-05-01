import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import logoReact from './assets/react-logo.webp';
import logoNode from './assets/node-logo.png';
import logoExpress from './assets/express-logo.png';
import logoJs from './assets/js-logo.png';
import logoTailwind from './assets/png-transparent-tailwind-css-hd-logo.png';
import logoMongoDB from './assets/mongodb-logo.png';
import captureMarvel from './assets/capture-marvel.jpg';
import marvelLogo from './assets/marvel-logo.png';
import rawgLogo from './assets/rawg-logo.webp';
import captureGamepad from './assets/capture-gamepad.jpg';

function App() {
  return (
    <div className="App bg-stone-900">
      <Header />
      <main className="flex flex-col min-h-screen">
        <div className="text-center mt-6 mb-10">
          <h1 className="text-4xl mb-4 font-bold">Hello 👋, I'm Samy Khelfa</h1>
          <p className="text-xl mb-10">A passionate web and mobile developer based in Paris. I craft dynamic and innovative web applications. Dive into my creative world where technology meets design to bring unique projects to life.</p>
          <h2 className="text-2xl mb-6">My technologies</h2>
          <div className="flex justify-center items-center gap-8">
            <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noopener noreferrer">
              <img src={logoReact} alt="React Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Node.js" target="_blank" rel="noopener noreferrer">
              <img src={logoNode} alt="Node.js Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Express.js" target="_blank" rel="noopener noreferrer">
              <img src={logoExpress} alt="Express Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://en.wikipedia.org/wiki/JavaScript" target="_blank" rel="noopener noreferrer">
              <img src={logoJs} alt="JavaScript Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://en.wikipedia.org/wiki/Tailwind_CSS" target="_blank" rel="noopener noreferrer">
              <img src={logoTailwind} alt="Tailwind CSS Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
            </a>
            <a href="https://en.wikipedia.org/wiki/MongoDB" target="_blank" rel="noopener noreferrer">
              <img src={logoMongoDB} alt="MongoDB Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
          <div id="portfolio" className="portfolio-section">
            <h2 className="text-2xl mt-10 mb-6 pt-20 text-center">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
              <div className="bg-gray-700 rounded-lg p-12 shadow-lg flex flex-col items-center text-white">
                <img src={marvelLogo} className="h-12 w-auto mb-4" alt="Marvel Logo" />
                <p className="text-lg mb-4">This is a project that brings together all the characters and comics from the Marvel universe.</p>
                <a href="https://marvel-samy.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={captureMarvel} className="w-full max-w-md h-auto hover:scale-105 transition-transform duration-300" alt="Screenshot of Marvel project" />
                </a>
              </div>
              <div className="bg-gray-700 rounded-lg p-12 shadow-lg flex flex-col items-center text-white">
                <img src={rawgLogo} className="h-12 w-auto mb-4" alt="RAWG Logo" />
                <p className="text-lg mb-4">This is a website that uses the RAWG API to catalog all existing video games (release date, synopsis, screenshots, description, etc.).</p>
                <a href="https://gamepad-samy.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={captureGamepad} className="w-full max-w-md h-auto hover:scale-105 transition-transform duration-300" alt="Screenshot of Gamepad project" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
