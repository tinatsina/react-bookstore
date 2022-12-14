import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import '../style/Navbar.model.css';
import Books from './Books';
import Categories from './Categories';

const Navbar = () => (
  <>
    <nav>
      <ul>
        <li className="logo-icon">BOOKSTORE CMS</li>
        <li>
          <Link to="/">BOOKS</Link>
        </li>
        <li>
          <Link to="Categories">CATEGORIES</Link>
        </li>
        <li className="profile-picture-right" />
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="Categories" element={<Categories />} />
    </Routes>
  </>
);

export default Navbar;
