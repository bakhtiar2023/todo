import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <div className="container flex align-center justify-center pb-10">
      <div className="section flex align-center justify-center">
        <div className="flex column justify-center align-center left-card secondary flex align-center justify-center">
          <p className="h0 mb-0 mt-0">
            <span className="text-quinary">4</span>
            <span className="text-secondary">0</span>
            <span className="text-quinary">4</span>
          </p>
          <p className="h5 mb-3 mt-0 font-roboto text-quinary">
            You didnt break the internet, but we cant find what you are
            looking for.
          </p>
          <Link to="/" className="btn flex justify-center align-center">
            BACK HOME
          </Link>
        </div>
        <div className="right-card primary flex align-center justify-center" />
      </div>
    </div>
  );
}

export default NotFound;
