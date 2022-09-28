import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import '../style/BookForm.css';
import { addNewbook } from '../redux/books/books';

const BookForm = () => {
  // Use dispatch handler for actions
  const dispatch = useDispatch();

  const formCheck = (event) => {
    // Prevent default submit patterns
    event.preventDefault();
    // Create payload as object
    const newBookObject = {
      item_id: uuidv4(),
      title: event.target.bookTitle.value,
      author: event.target.bookAuthor.value,
      category: 'Action',
    };

    // Dispatch the action to the store
    dispatch(addNewbook(newBookObject));
  };

  return (
    <form onSubmit={formCheck}>
      <input name="bookTitle" className="book-name" type="text" placeholder="Please enter your book name" />
      <input name="bookAuthor" className="book-author" type="text" placeholder="Author name" />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default BookForm;
