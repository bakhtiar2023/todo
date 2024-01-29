import React from 'react';
import '../CreateTodo/CreateTodo.css';
import { useLocation } from 'react-router-dom';
import { FormEdit } from '../../components/Form/Form';

function EditTodo() {
  const { state } = useLocation();
  return (
    <div className="container flex align-center justify-center">
      <div className="landingPage flex align-center justify-center mt-4">
        <div className="leftContainer flex align-center justify-end">
          <div className="textLeft h1 text-primary opacity-3 ms-0 mt-0 mb-0 me-0">Todo Apps</div>
        </div>
        <div className="rightContainer flex column align-center justify-start">
          <FormEdit formTitle="edit todo" labelInputTitle="todo title" todoValues={state} />
        </div>
      </div>
    </div>
  );
}

export default EditTodo;
