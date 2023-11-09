import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({ children, styles, handleClick }) {
  return (
    <button type="submit" className={styles || 'default'} onClick={handleClick}>{children || 'Button'}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
