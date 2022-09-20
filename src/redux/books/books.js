const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DEL_BOOK = 'react-bookstore/books/DEL_BOOK';

const initialState = [];

export const addBook = (data) => ({ type: 'ADD_BOOK', data });
export const deleteBook = (data) => ({ type: 'DEL_BOOK', data });

const Booksreducer = (state = initialState, action) => {
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
