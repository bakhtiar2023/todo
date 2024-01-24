import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './Homepage/HomePage';
import NotFound from './NotFound/NotFound';
import MyTodo from './MyTodo/MyTodo';
import Contact from './Contact/Contact';
import MainPage from './MainPage/MainPage';
import CreateTodo from './CreateTodo/CreateTodo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/my-todo" element={<MyTodo />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create-todo" element={<CreateTodo />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
