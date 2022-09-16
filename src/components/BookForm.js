import React from 'react';
import '../style/BookForm.css';

const BookForm = () => (
  <form>
    <input className="book-name" type="text" placeholder="Please enter your book name" />
    <input className="book-author" type="text" placeholder="author" />
    <button type="button">SUBMIT</button>
  </form>
);

export default BookForm;
