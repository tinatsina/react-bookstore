import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Book from './Book';
import BookForm from './BookForm';
import { fetchBookList } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Booksreducer);
  // Yeah pakaipa
  useEffect(() => {
    dispatch(fetchBookList());
  }, [dispatch]);

  const bookIndex = Object.keys(state.books[0]);

  return (
    <ul>
      {bookIndex.map((book) => (
        <Book
          key={book}
          bookID={book}
          bookTitle={state.books[0][book][0].title}
          bookAuthor={state.books[0][book][0].author}
        />
      ))}
      <BookForm />
    </ul>
  );
};

export default Books;
