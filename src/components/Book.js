import React from 'react';
import '../style/Book.css';

const Book = () => (
  <>
    <div className="author-title-container">
      <h3>Author</h3>
      <p>Title</p>
    </div>
    <button className="delete-button" type="button">DELETE</button>
  </>
);

export default Book;
