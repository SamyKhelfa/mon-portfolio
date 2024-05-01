// Footer.js
import React from 'react';
import '../styles/footer.css';
import logoGitHub from '../assets/github-logo.png'; // Vérifie le chemin d'accès
import logoLinkedIn from '../assets/linkedin-logo.webp'; // Vérifie le chemin d'accès

const Footer = () => {
    return (
<footer className="bg-gray-800 text-white p-4">
    <div className="flex justify-between items-center">
        {/* Container for logos, centered */}
        <div className="flex-1"></div> {/* This empty div helps center the middle div */}
        <div className="flex justify-center items-center gap-4 flex-1">
            <a href="https://github.com/SamyKhelfa" target="_blank" rel="noopener noreferrer">
                <img src={logoGitHub} alt="GitHub Logo" className="h-8 hover:opacity-75" />
            </a>
            <a href="https://www.linkedin.com/in/samy-khelfa/" target="_blank" rel="noopener noreferrer">
                <img src={logoLinkedIn} alt="LinkedIn Logo" className="h-8 hover:opacity-75" />
            </a>
        </div>
        <div className="flex-1 text-right">
            <p>©2024 Samy KHELFA</p>
        </div>
    </div>
</footer>

    
    );
};

export default Footer;
