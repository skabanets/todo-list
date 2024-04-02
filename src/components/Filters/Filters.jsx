import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from '../../redux/todo/slice';

export const Filters = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const btnFilter =
    'border-2 border-black px-4 py-2 rounded-md text-lg hover:text-white hover:bg-orange-400 w-[120px]';

  return (
    <div className="flex justify-center gap-2 my-5">
      <button
        className={`${btnFilter} ${filter === 'All' ? 'bg-yellow-300' : ''}`}
        type="button"
        onClick={() => dispatch(changeFilter('All'))}
      >
        All
      </button>
      <button
        className={`${btnFilter} ${filter === 'Active' ? 'bg-yellow-300' : ''}`}
        type="button"
        onClick={() => dispatch(changeFilter('Active'))}
      >
        Active
      </button>
      <button
        className={`${btnFilter} ${filter === 'Completed' ? 'bg-yellow-300' : ''}`}
        type="button"
        onClick={() => dispatch(changeFilter('Completed'))}
      >
        Completed
      </button>
    </div>
  );
};
