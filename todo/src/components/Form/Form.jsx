/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Form.css';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import todoSchema from '../../schema';
import editTodo from '../../apiCaller/editTodo';
import postTodo from '../../apiCaller/postTodo';

function FormEdit({
  formTitle, labelInputTitle, todoValues,
}) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const todo = {
    title: todoValues?.title,
    completed: todoValues?.completed,
  };
  const {
    handleChange, handleSubmit,
  } = useFormik({
    initialValues: todo,
    enableReinitialize: true,
    validationSchema: todoSchema,
    onSubmit: async (values) => {
      const todoCompleted = (values?.completed === 'true');
      const updatedValues = {
        id: todoValues?.id,
        title: values?.title,
        completed: todoCompleted,
      };
      const resUpdated = await editTodo(updatedValues);
      if (resUpdated === true) {
        setLoading(false);
        console.log('Todo successfully updated');
        navigate('/my-todo');
      } else {
        console.log('Server Error');
      }
    },
  });
  return (
    <div>
      <div className="h2 text-quinary text-center text-capitalize">{formTitle}</div>
      <form className="mt-2 mb-2 flex column justify-center align-center" onSubmit={handleSubmit}>
        <label className="labelEdit text-quinary" htmlFor="titleInput">
          {labelInputTitle}
          <input type="text" className="inputTodo w-20 h-3" id="titleInput" value={todoValues?.title} onChange={handleChange} name="title" />
        </label>
        <label htmlFor="inputCompletedOption" className="labelEdit flex justify-center align-center text-quinary">
          Completed:
          <select className="selectionInput ms-3" id="inputCompletedOption" defaultValue={todoValues?.completed} onChange={handleChange} name="completed">
            <option value={false}>ongoing</option>
            <option value={!false}>completed</option>
          </select>
        </label>
        <button type="submit" className="btn bg-primary text-brown" onClick={() => { setLoading(!loading); }} style={loading === true ? { pointerEvents: 'none' } : {}}>{loading ? (<i className="fa fa-circle-o-notch fa-spin" />) : 'Submit'}</button>
        <Link to="/my-todo" className="link h5 text-quinary text-center ms-4 mt-4 text-underline">Discard</Link>
      </form>
    </div>
  );
}

FormEdit.propTypes = {
  formTitle: PropTypes.string.isRequired,
  labelInputTitle: PropTypes.string.isRequired,
  todoValues: PropTypes.object.isRequired,
};

function FormPost({
  formTitle, labelInputTitle,
}) {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState({ title: '', completed: false });
  const navigate = useNavigate();
  const {
    handleChange, handleSubmit, errors, touched,
  } = useFormik({
    initialValues: todos,
    enableReinitialize: true,
    validationSchema: todoSchema,
    onSubmit: async (values) => {
      setTodos({ title: values.title, completed: values.completed });
      const resPosted = await postTodo(values);
      if (resPosted === true) {
        setLoading(false);
        alert('Todo successfully posted');
        navigate('/my-todo');
      } else {
        alert('Server Error');
      }
    },
  });

  useEffect(() => {
    const timer = setTimeout(() => { setLoading(false); }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [loading]);

  return (
    <div>
      <div className="h2 text-quinary text-center text-capitalize">{formTitle}</div>
      <form className="mt-2 mb-2 flex column justify-center align-center" onSubmit={handleSubmit}>
        <label className={errors.title ? 'labelEdit text-danger mb-2' : 'labelEdit text-quinary'} htmlFor="titleInput">
          {
            errors.title
              ? errors.title
              : labelInputTitle
          }
          <input type="text" className="inputTodo w-20 h-3" id="titleInput" style={errors.title || touched.title ? { border: '1px solid #ff0000' } : {}} defaultValue={todos.title} onChange={handleChange} name="title" />
        </label>
        <label htmlFor="inputCompletedOption" className="labelEdit flex justify-center align-center text-quinary">
          {
            errors.completed
              ? errors.completed
              : 'Completed:'
          }
          <select className="selectionInput ms-3" id="inputCompletedOption" style={errors.completed || touched.completed ? { border: '1px solid #ff0000' } : {}} defaultValue={todos.completed} onChange={handleChange} name="completed">
            <option value={false}>ongoing</option>
            <option value={!false}>completed</option>
          </select>
        </label>
        <button type="submit" className="btn bg-primary text-brown" onClick={() => { setLoading(!loading); }} style={loading === true || errors.title ? { pointerEvents: 'none' } : {}}>{loading ? (<i className="fa fa-circle-o-notch fa-spin" />) : 'Submit'}</button>
        <Link to="/my-todo" className="link h5 text-quinary text-center ms-4 mt-4 text-underline">Back to My Todo</Link>
      </form>
    </div>
  );
}

FormPost.propTypes = {
  formTitle: PropTypes.string.isRequired,
  labelInputTitle: PropTypes.string.isRequired,
};

export { FormEdit, FormPost };
