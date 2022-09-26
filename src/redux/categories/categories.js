const CHECK_STATUS = 'react-bookstore/categories/CHECK_STATUS';

const initialState = [];

export const checkStatus = () => ({ type: CHECK_STATUS });

const Categoriesreducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default Categoriesreducer;
