import React, { useState } from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './MyTodo.css';
import Modal from '../../components/Modal/Modal';

function MyTodo() {
  const data = [
    {
      id: 5,
      title: 'lorem',
      completed: true,
      createdAt: '2023-08-27T16:39:11.729Z',
      updatedAt: '2023-09-09T16:04:21.595Z',
    },
    {
      id: 6,
      title: 'lorem',
      completed: false,
      createdAt: '2023-08-27T16:40:16.591Z',
      updatedAt: '2023-08-27T16:40:16.591Z',
    },
    {
      id: 8,
      title: 'ipsum',
      completed: true,
      createdAt: '2023-08-27T17:29:09.393Z',
      updatedAt: '2023-08-27T17:29:38.238Z',
    },
    {
      id: 9,
      title: 'dolor et',
      completed: true,
      createdAt: '2023-09-09T14:50:00.113Z',
      updatedAt: '2023-09-09T19:21:35.409Z',
    },
    {
      id: 10,
      title: 'luctus',
      completed: true,
      createdAt: '2023-09-09T15:27:20.059Z',
      updatedAt: '2023-09-09T19:23:19.126Z',
    },
    {
      id: 11,
      title: 'laoreet',
      completed: false,
      createdAt: '2023-09-09T15:29:26.613Z',
      updatedAt: '2023-09-09T15:29:26.613Z',
    },
    {
      id: 12,
      title: 'faucibus',
      completed: false,
      createdAt: '2023-09-09T19:21:35.137Z',
      updatedAt: '2023-09-09T19:21:35.137Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
    {
      id: 13,
      title: 'luctus',
      completed: false,
      createdAt: '2023-09-09T19:23:18.846Z',
      updatedAt: '2023-09-09T19:23:18.846Z',
    },
  ];
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const [confirm, setConfirm] = useState(false);
  const handleConfirm = () => {
    setConfirm(true);
  };
  const handleCloseConfirm = () => {
    setConfirm(false);
  };

  return (
    <div className="container flex column align-start justify-center">
      <Modal show={show} handleClose={handleClose}>
        <div className="mt-2 mb-2 flex column justify-center align-center">
          <div className="h2 text-center mt-0 text-quinary">Edit Todo</div>
          <div className="labelEditModal text-quinary">todo title</div>
          <input type="text" className="inputTodo w-20 h-3" id="titleInput" />
          <div className="labelEditModal text-quinary">completed</div>
          <input type="text" className="inputTodo mt-0 mb-4 w-20 h-3" id="completedInput" />
          <button type="submit" className="btn bg-primary text-primary">Submit</button>
        </div>
      </Modal>
      <Modal show={confirm} handleClose={handleCloseConfirm}>
        <div className="flex column align-center justify-center">
          <div className="h3 mt-2 mb-2 text-capitalize text-quinary">are you sure to delete todo?</div>
          <div className="flex align-center justify-center">
            <button type="button" className="btn">Yes</button>
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
          <tr className="table-row">
            <th className="table-cell h4 text-quinary bg-tertiary">Task Title</th>
            <th className="table-cell h4 text-quinary bg-tertiary">Completed</th>
            <th className="table-cell h4 text-quinary bg-tertiary">Date Created</th>
            <th className="table-cell h4 text-quinary bg-tertiary">Date Updated</th>
            <th className="table-cell h4 text-quinary bg-tertiary">Options</th>
          </tr>
          {
            data.map((cellData) => (
              <tr className="table-row">
                <td className="table-cell h5 text-quinary bg-tertiary text-center text-capitalize">{cellData.title}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">{cellData.completed ? '✔' : '-'}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">{moment(cellData.createdAt).format('DD-MM-YYYY,h:mm A').split(',')[0]}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">{moment(cellData.updatedAt).format('DD-MM-YYYY,h:mm A').split(',')[0]}</td>
                <td className="table-cell h5 text-quinary bg-tertiary text-center">
                  <button type="button" className="table-button" onClick={handleClick}>edit</button>
                  <button type="button" className="table-button ms-3" onClick={handleConfirm}>delete</button>
                </td>
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  );
}

export default MyTodo;
