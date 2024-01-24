import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

function Modal({ handleClose, show, children }) {
  return (
    <div>
      <div id="myModal" className="modal" style={{ display: show ? 'block' : 'none' }}>
        <div className="modal-content">
          <div className="close" onClickCapture={handleClose}>&times;</div>
          {children}
        </div>

      </div>
    </div>
  );
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

export default Modal;
