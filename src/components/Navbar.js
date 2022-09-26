import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../style/Navbar.model.css';
import Books from './Books';
import Categories from './Categories';

const Navbar = () => (
  <>
    <nav>
      <ul>
        <li>BOOKSTORE</li>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="Categories">Categories</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>
  </>
);

export default Navbar;
