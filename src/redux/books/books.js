const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DEL_BOOK = 'react-bookstore/books/DEL_BOOK';

const initialState = {
  books: [
    {
      id: 0,
      title: 'Jumanji',
      author: 'The Rock',
    },
    {
      id: 1,
      title: 'Harry Potter',
      author: 'JK Rowling',
    },
    {
      id: 2,
      title: 'Game of Zones',
      author: 'Bleacher Report',
    },
    {
      id: 3,
      title: 'The Confession',
      author: 'John Grisham',
    },
  ],
};

export const addBook = (data) => ({ type: 'ADD_BOOK', data });
export const deleteBook = (data) => ({ type: 'DEL_BOOK', data });

const Booksreducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.data];
    case DEL_BOOK:
      return state.filter((book) => book.id !== action.data);
    default:
      return state;
  }
};

export default Booksreducer;
