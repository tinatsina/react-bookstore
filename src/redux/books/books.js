import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DEL_BOOK = 'react-bookstore/books/DEL_BOOK';

const initialState = {
  books: [
    {
      id: uuidv4(),
      title: 'Jumanji',
      author: 'The Rock',
    },
    {
      id: uuidv4(),
      title: 'Harry Potter',
      author: 'JK Rowling',
    },
    {
      id: uuidv4(),
      title: 'Game of Zones',
      author: 'Bleacher Report',
    },
  ],
};

export const addBook = (data) => ({ type: ADD_BOOK, data });
export const deleteBook = (data) => ({ type: DEL_BOOK, data });

const Booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.data] };
    case DEL_BOOK:
      return { books: [...state.books.filter((book) => book.id !== action.data)] };
    default:
      return state;
  }
};

export default Booksreducer;
