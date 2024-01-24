import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/">Add Todo</Link>
        <Link to="/">Add Todo</Link>
      </div>
    </nav>
  );
}

export default Navbar;
