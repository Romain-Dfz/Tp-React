import React from 'react';
import { Link } from 'react-router-dom';
import Header from './header';

function ContactPage() {
  return (
    <div className="text-center">
      <Header />
      <h2>Liste des contacts</h2>
      {true ? (
        <p>Vous n'avez aucun contact pour le moment.</p>
      ) : (
        <div>{/* Affichez la liste des contacts ici */}</div>
      )}

      {/* Lien vers la page de formulaire de création de contact */}
      <Link to="/ajouter-contact" className="btn btn-warning">
        Ajouter un contact
      </Link>
    </div>
  );
}

export default ContactPage;
