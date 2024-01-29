import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({
  name, type, id, handleChange, styles, inputStyles,
  labelStyles, placeholder, defaultValue, children,
}) {
  return (
    <div className={styles || 'default'}>
      <label htmlFor={id} className={labelStyles}>{children}</label>
      <input
        id={id}
        className={inputStyles}
        defaultValue={defaultValue || ''}
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder || 'input'}
      />
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  inputStyles: PropTypes.string.isRequired,
  labelStyles: PropTypes.string.isRequired,
};

export default Input;
