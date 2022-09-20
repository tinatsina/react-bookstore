import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import Booksreducer from './books/books';
import Categoriesreducer from './categories/categories';

const reducer = combineReducers({
  Booksreducer,
  Categoriesreducer,
});

const store = configureStore(reducer, applyMiddleware(logger));

export default store;
