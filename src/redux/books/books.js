const initialState = [];

export const ADD_BOOK = (data) => ({ type: 'ADD_BOOK', data });
export const DEL_BOOK = (data) => ({ type: 'DEL_BOOK', data });

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
