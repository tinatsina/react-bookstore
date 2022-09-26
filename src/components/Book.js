import React from 'react';
import '../style/Book.css';
import PropTypes from 'prop-types';

const Book = ({ bookTitle, bookAuthor }) => (
  <>
    <div className="author-title-container">
      <h3>{bookAuthor}</h3>
      <p>{bookTitle}</p>
    </div>
    <button className="delete-button" type="button">DELETE</button>
  </>
);

Book.propTypes = {
  bookAuthor: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
};

export default Book;
