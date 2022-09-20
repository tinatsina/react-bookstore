const initialState = [];

export const CHECK_STATUS = (data) => ({ type: CHECK_STATUS, data });

const Categoriesreducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return state.filter((book) => book.status === true);
    default:
      return state;
  }
};

export default Categoriesreducer;
