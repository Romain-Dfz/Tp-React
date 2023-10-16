import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';

function ContactForm() {
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const navigate = useNavigate(); // Utilisation de useNavigate pour la redirection

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Logique pour ajouter un nouveau contact ici
    // Vous pouvez ajouter le contact à votre liste de contacts ou à une API, par exemple.
    console.log('Nouveau contact :', contact);

    // Réinitialisez le formulaire après la soumission
    setContact({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
    });

    // Redirigez l'utilisateur vers la liste des contacts après la création
    navigate('/contact'); // Redirigez vers la liste des contacts
  };

  return (
    <div className="text-center">
      <Header />
      <h2>Créer un nouveau contact</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Prénom :
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            value={contact.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Nom :
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            value={contact.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Numéro de téléphone :
          </label>
          <input
            type="text"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
