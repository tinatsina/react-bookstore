const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DEL_BOOK = 'react-bookstore/books/DEL_BOOK';
const FETCH_API = 'react-bookstore/books/FETCH_DATA';
const ERR_API = 'react-bookstore/books/ERR_API';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/taEIPwAYCGFy8Z4duEsC/books/';

const initialState = {
  books: [{ item2: [{ author: '', category: '', title: '' }] }],
};

// Synchronous action creators
// export const addBook = (data) => ({ type: ADD_BOOK, data });
// export const deleteBook = (data) => ({ type: DEL_BOOK, data });

// Asynchronous fetch book action
export const fetchBookList = () => (dispatch) => fetch(BASE_URL)
  .then((response) => response.json())
  .then((json) => dispatch({ type: FETCH_API, payload: json }))
  .catch((err) => dispatch({ type: ERR_API, err_message: err }));

// Asynchronous create new book action
export const addNewbook = (data) => (dispatch) => fetch(
  BASE_URL,
  {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  },
)
  .then((response) => response.text())
  .then(() => dispatch({ type: ADD_BOOK, data }));

// Asynchronous delete book action
export const deleteBook = (bookID) => (dispatch) => fetch(BASE_URL + bookID, { method: 'DELETE' })
  .then((response) => response.text())
  .then((json) => dispatch({ type: DEL_BOOK, payload: json }));

const Booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { books: [...state.books, action.data] };
    case DEL_BOOK:
      return state;
    case FETCH_API:
      return { books: [action.payload] };
    case ERR_API:
      return state;
    default:
      return state;
  }
};

export default Booksreducer;
