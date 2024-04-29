// Footer.js
import React from 'react';
import '../styles/footer.css';
import logoGitHub from '../assets/github-logo.png'; // Vérifie le chemin d'accès
import logoLinkedIn from '../assets/linkedin-logo.webp'; // Vérifie le chemin d'accès

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white text-center p-4">
            <div className="flex justify-center items-center gap-4">
                <a href="https://github.com/SamyKhelfa" target="_blank" rel="noopener noreferrer">
                    <img src={logoGitHub} alt="GitHub Logo" className="h-8 hover:opacity-75" />
                </a>
                <a href="https://www.linkedin.com/in/samy-khelfa/" target="_blank" rel="noopener noreferrer">
                    <img src={logoLinkedIn} alt="LinkedIn Logo" className="h-8 hover:opacity-75" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
