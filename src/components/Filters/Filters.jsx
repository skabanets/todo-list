import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/todo/slice';

export const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(changeFilter('All'))}>
        All
      </button>
      <button type="button" onClick={() => dispatch(changeFilter('Active'))}>
        Active
      </button>
      <button type="button" onClick={() => dispatch(changeFilter('Complited'))}>
        Completed
      </button>
    </div>
  );
};
