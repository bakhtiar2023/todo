import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Popup.css';
import { popupTypes } from './business';

function Popup({ children, styles, popupShow }) {
  const [show, setShow] = useState(popupShow);

  useEffect(() => {
    const timer = setTimeout(() => { setShow(false); }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [show]);

  const handlePopupShow = () => {
    setShow(false);
  };

  const popupClass = popupTypes(styles);

  return (
    <div className={show === true ? popupClass : 'default hide'}>
      <p className="message">{children}</p>
      <Link href="/" className="closeButton" onClick={handlePopupShow}>x</Link>
    </div>
  );
}

Popup.propTypes = {
  children: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  popupShow: PropTypes.number.isRequired,
};

export default Popup;
