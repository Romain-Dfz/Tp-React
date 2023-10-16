// ContactsPage.js

import React, { useState } from 'react';
import ContactForm from './ContactForm';

function ContactsPage() {
  const [contacts, setContacts] = useState([]);

  // Fonction pour ajouter un nouveau contact à la liste des contacts
  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <h2>Liste des contacts</h2>
      {/* Affichez la liste des contacts */}
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.firstName} {contact.lastName}
          </li>
        ))}
      </ul>

      {/* Passez la fonction addContact en tant que prop à ContactForm */}
      <ContactForm addContact={addContact} />
    </div>
  );
}

export default ContactsPage;
