import React from 'react';
import { Link } from 'react-router-dom';
import limitClick from '../../hooks/clickLimiter';
import './Homepage.css';

function HomePage() {
  return (
    <div className="container flex justify-center">
      <section className="mainContainer flex align-center justify-end">
        <div className="rightBg" />
        <div className="leftBg" />
        <div className="textContainer flex align-start p-0 m-0">
          <div className="imageContain" />
          <div className="textContain ps-4">
            <p className="mb-0 text-tertiary">Hi, my name is</p>
            <p className="mt-3 mb-0 h1 text-primary">Achmad Bakhtiar K N.</p>
            <p className="mt-0 mb-0 h1 text-secondary">I build things for the web.</p>
            <p className="mt-4 mb-0 h5 text-secondary">{'I\'m a newbie full-stack web developer (and occasionally testing)'}</p>
            <p className="mt-0 mb-0 h5 text-secondary">{'exceptional digital expreiences.Currently, I\'m focused on grow up my skill,'}</p>
            <p className="mt-0 h5 text-secondary">
              seeking for new job and my current job is Quality Inspector at
              <span className="text-tertiary"> Indonesian Aerospace.</span>
            </p>
            <Link to="https://www.linkedin.com/in/achmad-bakhtiar-k-n-2b318925a/" className="btn flex justify-center align-center" onClick={limitClick.handleClick} style={limitClick.clickLimiter > 0 ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }} target="_blank">HIRE ME</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
