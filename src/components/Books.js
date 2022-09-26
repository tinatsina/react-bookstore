import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookForm from './BookForm';

const Books = () => {
  const state = useSelector((state) => state.Booksreducer);

  return (
    <ul>
      {state.books.map((book) => (
        <Book
          key={book.id}
          bookTitle={book.title}
          bookAuthor={book.author}
        />
      ))}
      <BookForm />
    </ul>
  );
};

export default Books;
