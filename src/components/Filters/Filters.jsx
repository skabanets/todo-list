import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/todo/slice';

export const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <div className="flex justify-center gap-2 my-5">
      <button
        className={`filterBtn ${filter === 'All' ? 'bg-yellow-300' : ''}`}
        type="button"
        onClick={() => dispatch(changeFilter('All'))}
      >
        All
      </button>
      <button
        className={`filterBtn ${filter === 'Active' ? 'bg-yellow-300' : ''}`}
        type="button"
        onClick={() => dispatch(changeFilter('Active'))}
      >
        Active
      </button>
      <button
        className={`filterBtn ${filter === 'Completed' ? 'bg-yellow-300' : ''}`}
        type="button"
        onClick={() => dispatch(changeFilter('Completed'))}
      >
        Completed
      </button>
    </div>
  );
};
