import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ children, styles }) {
  return (
    <button type="submit" className={styles || 'default'}>{children || 'Button'}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
};

export default Button;
