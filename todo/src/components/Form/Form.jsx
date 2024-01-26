import React from 'react';
import PropTypes from 'prop-types';
import '../Modal/Modal.css';
import '../../index.css';
import '../../pages/MyTodo/MyTodo.css';
import { Link } from 'react-router-dom';

function Form({
  formTitle, labelInputTitle, labelInputCompleted, valueTitle, valueCompleted, types,
}) {
  return (
    <div>
      <div className="h2 text-quinary text-center text-capitalize">{formTitle}</div>
      <div className="mt-2 mb-2 flex column justify-center align-center">
        <div className="labelEditModal text-quinary">{labelInputTitle}</div>
        <input type="text" className="inputTodo w-20 h-3" id="titleInput" defaultValue={valueTitle || ''} />
        <div className="labelEditModal text-quinary">{labelInputCompleted}</div>
        <input type="text" className="inputTodo mt-0 mb-4 w-20 h-3" id="completedInput" defaultValue={valueCompleted || null} />
        <button type="submit" className="btn bg-primary text-primary">Submit</button>
        <Link to="/my-todo" className="link h5 text-primary text-center mt-4" style={types === 'editTodo' ? {} : { display: 'none' }}>Discard</Link>
      </div>
    </div>
  );
}

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  labelInputTitle: PropTypes.string.isRequired,
  labelInputCompleted: PropTypes.string.isRequired,
  valueTitle: PropTypes.string.isRequired,
  valueCompleted: PropTypes.bool.isRequired,
  types: PropTypes.string.isRequired,
};

export default Form;
