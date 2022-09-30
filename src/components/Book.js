import '../style/Book.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const Book = ({ bookTitle, bookAuthor, bookID }) => {
  // Call dispatch to send the actions to the store
  const dispatch = useDispatch();
  // Action call to delete a book from the list
  const deleteBookHandler = (bookID) => {
    dispatch(deleteBook(bookID));
  };

  return (
    <li className="book-item-component">
      <div className="author-title-container">
        <p className="book-category">Action</p>
        <p className="book-title">{bookTitle}</p>
        <h3 className="book-card-author">{bookAuthor}</h3>
        <ul className="book-actions-list">
          <li>Comments</li>
          <li className="vertical-line" />
          <li>Remove</li>
          <li className="vertical-line" />
          <li>Edit</li>
        </ul>
      </div>
      <div className="round" />
      <div className="percentage-completion-block">
        <p className="sixty-four-percent">64%</p>
        <p className="sixty-four-percent-completed">Completed</p>
        <div className="Line-2" />
      </div>
      <div className="button-chapter-details">
        <span className="Current-Chapter">CURRENT CHAPTER </span>
        <span className="Current-Lesson"> Chapter 17 </span>
        <button className="delete-button" type="button" onClick={() => deleteBookHandler(bookID)}>DELETE</button>
      </div>
    </li>
  );
};

Book.propTypes = {
  bookAuthor: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookID: PropTypes.string.isRequired,
};

export default Book;
