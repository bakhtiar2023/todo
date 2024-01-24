import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import limitClick from '../../hooks/clickLimiter';
import './MainPage.css';

function MainPage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <div className="container flex align-center justify-center">
      <nav style={{ opacity: `${visible ? '1' : '0'}` }}>
        <Link to="/" className="link navLogo" onClick={limitClick.handleClick} style={limitClick.clickLimiter > 0 ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }}>
          <p id="toText">To</p>
          <p id="doText">Do</p>
        </Link>
        <div className="navMenu">
          <Link to="/my-todo" className="link" onClick={limitClick.handleClick} style={limitClick.clickLimiter > 0 ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }}>My Todo</Link>
          <Link to="/contact" className="link" onClick={limitClick.handleClick} style={limitClick.clickLimiter > 0 ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }}>Contact</Link>
          <Link to="https://firebasestorage.googleapis.com/v0/b/todo-project-25b2b.appspot.com/o/Resume_Achmad%20Bakhtiar%20Khoirul%20Nizam.pdf?alt=media&token=1494f02b-4591-4336-9abc-f22ee3eef9e2" className="link" onClick={limitClick.handleClick} style={limitClick.clickLimiter > 0 ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }} target="_blank">Resume</Link>
        </div>
      </nav>
      <div className="container flex align-center justify-center bg-primary">
        <Outlet />
      </div>
    </div>
  );
}

export default MainPage;
