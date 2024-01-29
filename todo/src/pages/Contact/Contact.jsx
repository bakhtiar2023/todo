import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  return (
    <div className="container flex align-center justify-center pb-10">
      <div className="center-section flex align-center justify-center text-primary">
        <div className="flex column align-center justify-center">
          <i className="fa-brands fa-linkedin mb-2" />
          <i className="fa-brands fa-instagram mt-2 mb-2" />
          <i className="fa-brands fa-github mt-2 mb-2" />
          <i className="fa-solid fa-envelope mt-2" />
        </div>
        <div className="flex column align-center justify-start">
          <Link to="https://www.linkedin.com/in/achmad-bakhtiar-k-n-2b318925a/" className="social-link h5 mb-2 text-primary" target="_blank">Achmad Bakhtiar K N</Link>
          <Link to="https://www.instagram.com/achmadbakhtiar?igsh=MTc3OXBiYmVrcndoOQ==" className="social-link h5 mt-2 mb-2 text-primary" target="_blank">Achmad Bakhtiar</Link>
          <Link to="https://github.com/bakhtiar2023" className="social-link h5 mt-2 mb-2 text-primary" target="_blank">Bakhtiar2023</Link>
          <Link to="mailto:achmadbakhtiarkn@gmail.com" className="social-link h5 mt-2 mb-3 text-primary ms-3" target="_blank">achmadbakhtiarkn@gmail.com</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
