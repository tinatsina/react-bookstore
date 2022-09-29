import { configureStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import Booksreducer from './books/books';
import Categoriesreducer from './categories/categories';

const reducer = combineReducers({
  Booksreducer,
  Categoriesreducer,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));

export default store;
