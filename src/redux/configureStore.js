import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import Booksreducer from './books/books';
import Categoriesreducer from './categories/categories';

const reducer = combineReducers({
  Booksreducer,
  Categoriesreducer,
});

const store = configureStore({ reducer });

export default store;
