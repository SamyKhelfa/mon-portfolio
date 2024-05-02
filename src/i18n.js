// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) // detect language
  .init({
    resources: {
      en: {
        translation: {
          Home: "Home",
          About: "About",
          Services: "Services",
          Portfolio: "Portfolio",
          Contact: "Contact",
          Hello: "Hello 👋, I'm Samy",
          Description:
            "A passionate web and mobile developer based in Paris. I craft dynamic and innovative web applications. Dive into my creative world where technology meets design to bring unique projects to life.",
          Portfolio: "Portfolio",
          Marvel_project_description:
            "This is a project that brings together all the characters and comics from the Marvel universe.",
          RAWG_project_description:
            "This is a website that uses the RAWG API to catalog all existing video games (release date, synopsis, screenshots, description, etc.).",
          MyTechnologies: "My technologies",
        },
      },
      fr: {
        translation: {
          Home: "Acceuil",
          About: "A propos",
          Hello: "Bonjour 👋, je suis Samy",
          Description:
            "Développeur web et mobile passionné basé à Paris. Je réalise des applications web dynamiques et innovantes. Plongez dans mon monde créatif où la technologie rencontre le design pour donner vie à des projets uniques.",
          Portfolio: "Portfolio",
          Marvel_project_description:
            "Il s'agit d'un projet qui réunit tous les personnages et comics de l'univers Marvel.",
          RAWG_project_description:
            "Ceci est un site qui utilise l'API RAWG pour cataloguer tous les jeux vidéo existants (date de sortie, synopsis, captures d'écran, description, etc.).",
          MyTechnologies: "Mes technologies",
        },
      },
    },
    fallbackLng: "en",
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
