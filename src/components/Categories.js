import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const state = useSelector((state) => state.Categoriesreducer);
  const dispatch = useDispatch();

  const checkStatusHandler = () => {
    dispatch(checkStatus());
  };
  // The returned
  return (
    <>
      <button
        onClick={checkStatusHandler}
        type="button"
      >
        CLIICK ME
      </button>
      <h1>{state}</h1>
    </>
  );
};

export default Categories;
