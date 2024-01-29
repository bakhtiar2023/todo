import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './MyTodo.css';
import Modal from '../../components/Modal/Modal';
import getAllTodo from '../../api/getAllTodo';
import deleteTodo from '../../api/deleteTodo';

function MyTodo() {
  const [todos, setTodos] = useState([]);
  const [todoId, setTodoId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const handleCloseConfirm = () => {
    setConfirm(false);
  };

  const getTodo = async () => {
    const todosFromBe = await getAllTodo();
    setLoading(false);
    todosFromBe.map((todoFromBe) => setTodos(todoFromBe));
  };

  useEffect(() => {
    getTodo();
  }, [loading]);

  const handleDelTodo = async () => {
    await deleteTodo(todoId);
    setLoading(true);
    setConfirm(false);
    setTodoId(0);
  };

  return (
    <div className="container flex column align-start justify-center">
      <Modal show={confirm} handleClose={handleCloseConfirm}>
        <div className="flex column align-center justify-center">
          <div className="h3 mt-2 mb-2 text-capitalize text-quinary">are you sure to delete todo?</div>
          <div className="flex align-center justify-center">
            <button type="button" className="btn" onClick={handleDelTodo}>Yes</button>
            <button type="button" className="btn" onClick={handleCloseConfirm}>Discard</button>
          </div>
        </div>
      </Modal>
      <div className="container-title flex align-center justify-space-between">
        <p className="h2 text-primary mb-0 mt-0 ms-3">Todo List</p>
        <Link to="/create-todo" className="btnAdd flex align-center justify-center h4">Add todo</Link>
      </div>
      <div className="container-tables flex align-start justify-center">
        <table className="todo-table">
          <thead>
            <tr className="table-row">
              <th className="table-cell h4 text-quinary bg-tertiary">Task Title</th>
              <th className="table-cell h4 text-quinary bg-tertiary">Completed</th>
              <th className="table-cell h4 text-quinary bg-tertiary">Date Created</th>
              <th className="table-cell h4 text-quinary bg-tertiary">Date Updated</th>
              <th className="table-cell h4 text-quinary bg-tertiary">Options</th>
            </tr>
          </thead>
          <tbody>
            { loading ? (
              <tr className="table-row">
                <td className="table-cell h1 text-quinary bg-tertiary text-center text-capitalize" colSpan={5}>
                  <i className="fa fa-circle-o-notch fa-spin" />
                  loading...
                </td>
              </tr>
            ) : todos.map((cellData) => (
              <tr className="table-row" key={cellData.id}>
                <td className="table-cell h5 text-quinary bg-tertiary text-center text-capitalize">{cellData.title}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">{cellData.completed ? '✔' : '᠆'}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">{moment(cellData.createdAt).format('DD-MM-YYYY,h:mm A').split(',')[0]}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">{moment(cellData.updatedAt).format('DD-MM-YYYY,h:mm A').split(',')[0]}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">
                  <Link to="/edit-todo" className="table-button" state={cellData}>edit</Link>
                  <button type="button" className="table-button ms-3" onClick={() => { setConfirm(true); setTodoId(cellData.id); }}>delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyTodo;
