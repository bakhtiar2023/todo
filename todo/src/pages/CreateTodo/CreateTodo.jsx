import React from 'react';
import './CreateTodo.css';
import { FormPost } from '../../components/Form/Form';

function CreateTodo() {
  return (
    <div className="container flex align-center justify-center">
      <div className="landingPage flex align-center justify-center mt-4">
        <div className="leftContainer flex align-center justify-end">
          <div className="textLeft h1 text-primary opacity-3 ms-0 mt-0 mb-0 me-0">Todo Apps</div>
        </div>
        <div className="rightContainer flex column align-center justify-start">
          <FormPost formTitle="create todo" labelInputTitle="todo title" />
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
