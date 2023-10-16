// ./src/HomePage.js
import React from 'react';
import Header from './components/header';
import ContactForm from './components/ContactForm';

function HomePage() {
  return (
    <div>
      {/* Intégrez le composant Header ici */}
      <Header />
      {/* Le reste de votre contenu de la page d'accueil */}
      <h1 className="text-center">Bienvenue sur la page d'accueil</h1>
    </div>
  );
}

export default HomePage;
