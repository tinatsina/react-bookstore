import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'react-bookstore/books/ADD_BOOK';
const DEL_BOOK = 'react-bookstore/books/DEL_BOOK';
const FETCH_API = 'react-bookstore/books/FETCH_DATA';
const ERR_API = 'react-bookstore/books/ERR_API';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/taEIPwAYCGFy8Z4duEsC/books/';

const initialState = {
  books: [{ item2: [{ author: '', category: '', title: '' }] }],
};

// Create Async Thunk based action
export const fetchBookList = createAsyncThunk(FETCH_API, async () => {
  const response = await fetch(BASE_URL);
  const payload = await response.json();
  return payload;
});

// Asynchronous Thunk Based AddBook
export const addNewbook = createAsyncThunk(ADD_BOOK, async (data) => {
  fetch(BASE_URL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
});

// Asynchronous Thunk Based deletebook
export const deleteBook = createAsyncThunk(DEL_BOOK, async (bookID, thunkAPI) => {
  await fetch(BASE_URL + bookID, { method: 'DELETE' });
  thunkAPI.dispatch(fetchBookList());
});

const Booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return { books: [...state.books, action.data] };
    case `${DEL_BOOK}/fulfilled`:
      return state;
    case `${FETCH_API}/fulfilled`:
      return { books: [action.payload] };
    case ERR_API:
      return state;
    default:
      return state;
  }
};

export default Booksreducer;
