import React from 'react';
import './CreateTodo.css';

function CreateTodo() {
  return (
    <div className="container flex align-center justify-center">
      <div className="landingPage flex align-center justify-center mt-4">
        <div className="leftContainer flex align-center justify-end">
          <div className="textLeft h1 text-primary opacity-3 ms-0 mt-0 mb-0 me-0">Todo Apps</div>
        </div>
        <div className="rightContainer flex column align-center justify-start">
          <div className="h2 text-quinary">Create Todo</div>
          <div className="mt-2 mb-2 flex column justify-center align-center">
            <div className="labelEditModal text-quinary">todo title</div>
            <input type="text" className="inputTodo w-20 h-3" id="titleInput" />
            <div className="labelEditModal text-quinary">completed</div>
            <input type="text" className="inputTodo mt-0 mb-4 w-20 h-3" id="completedInput" />
            <button type="submit" className="btn bg-primary text-primary">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTodo;
