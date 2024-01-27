import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/todo/slice';

export const Filters = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button type="button" onClick={() => dispatch(changeFilter('all'))}>
        All
      </button>
      <button type="button" onClick={() => dispatch(changeFilter('active'))}>
        Active
      </button>
      <button type="button" onClick={() => dispatch(changeFilter('complited'))}>
        Completed
      </button>
    </div>
  );
};
