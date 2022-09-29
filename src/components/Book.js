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
        <h3>{bookAuthor}</h3>
        <p>{bookTitle}</p>
      </div>
      <button className="delete-button" type="button" onClick={() => deleteBookHandler(bookID)}>DELETE</button>
    </li>
  );
};

Book.propTypes = {
  bookAuthor: PropTypes.string.isRequired,
  bookTitle: PropTypes.string.isRequired,
  bookID: PropTypes.string.isRequired,
};

export default Book;
