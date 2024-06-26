import React from 'react';
import { useTranslation } from 'react-i18next';
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
import './i18n';
import emailjs from 'emailjs-com';

const apiKey = process.env.API_KEY

emailjs.init(apiKey);

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm('service_fhr3jck', 'template_bqt9hob', e.target)
    .then((result) => {
        console.log('Email successfully sent!', result.text);
        alert('Message sent successfully!');
    }, (error) => {
        console.log('Failed to send email:', error.text);
        alert('Failed to send the message, please try again');
    });
}




function App() {
  const { t } = useTranslation();

  return (
    <div className="App bg-stone-900">
      <Header />
      <main className="flex flex-col min-h-screen">
        <div className="text-center mt-6 mb-10">
          <h1 className="text-4xl mb-4 font-bold">{t('Hello')}</h1>
          <p className="text-xl mb-10">{t('Description')}</p>
          <h2 className="text-2xl mb-6">{t('MyTechnologies')}</h2>
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
            <h2 className="text-2xl mt-10 mb-6 pt-20 text-center">{t('Portfolio')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20">
              <div className="bg-gray-700 rounded-lg p-12 shadow-lg flex flex-col items-center text-white">
                <img src={marvelLogo} className="h-12 w-auto mb-4" alt="Marvel Logo" />
                <p className="text-lg mb-4">{t('Marvel_project_description')}</p>
                <a href="https://marvel-samy.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={captureMarvel} className="w-full max-w-md h-auto hover:scale-105 transition-transform duration-300" alt="Screenshot of Marvel project" />
                </a>
              </div>
              <div className="bg-gray-700 rounded-lg p-12 shadow-lg flex flex-col items-center text-white">
                <img src={rawgLogo} className="h-12 w-auto mb-4" alt="RAWG Logo" />
                <p className="text-lg mb-4">{t('RAWG_project_description')}</p>
                <a href="https://gamepad-samy.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <img src={captureGamepad} className="w-full max-w-md h-auto hover:scale-105 transition-transform duration-300" alt="Screenshot of Gamepad project" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <section id="contact" className="text-center p-10">
          <h2 className="text-4xl font-bold mb-4">{t('Contact')}</h2>
          <form className="max-w-xl mx-auto" onSubmit={sendEmail}>
  <input type="text" name="from_name" placeholder={t('Name')} className="w-full p-2 mb-4 border rounded" required />
  <input type="email" name="user_email" placeholder={t('Email')} className="w-full p-2 mb-4 border rounded" required />
  <input type="text" name="subject" placeholder={t('Subject')} className="w-full p-2 mb-4 border rounded" required />
  <textarea name="message" placeholder={t('Message')} className="w-full p-2 mb-4 border rounded h-40" required></textarea>
  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    {t('Send')}
  </button>
</form>

        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
