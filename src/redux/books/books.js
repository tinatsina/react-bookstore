const initialState = [];

export const ADD_BOOK = (payload) => ({ type: 'ADD_BOOK', payload });
export const DEL_BOOK = (payload) => ({ type: 'DEL_BOOK', payload });

const Booksreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DEL_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default Booksreducer;
