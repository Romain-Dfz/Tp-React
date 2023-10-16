import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage'; 
import ContactsPage from './components/ContactsPage'; 
import ContactForm from './components/ContactForm';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactsPage />} />
        <Route path="/ajouter-contact" element={<ContactForm />} />
      </Routes>
    </div>
  );
}

export default App;
