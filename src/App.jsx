import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import logoReact from './assets/react-logo.webp';
import logoNode from './assets/node-logo.png';
import logoExpress from './assets/express-logo.png';
import logoJs from './assets/js-logo.png';
import logoTailwind from './assets/png-transparent-tailwind-css-hd-logo.png';
import logoMongoDB from './assets/mongodb-logo.png'

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
        <img src={logoReact} alt="React Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
        <img src={logoNode} alt="Node.js Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
        <img src={logoExpress} alt="Express Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
        <img src={logoJs} alt="JavaScript Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
        <img src={logoTailwind} alt="Tailwind CSS Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
        <img src={logoMongoDB} alt = "MongoDB Logo" className="h-12 md:h-16 hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
