import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from '../../redux/todo/slice';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { getFilteredTodos } from '../../helpers/getFilteredTodos';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const filteredTodos = getFilteredTodos(todos, filter);

  return (
    <>
      <h2 className="flex justify-center text-xl">{`${filter} tasks:`}</h2>
      {filteredTodos.length ? (
        <ul className="flex flex-wrap w-[900px] gap-5 justify-center mx-auto my-5">
          {filteredTodos.map(todo => (
            <TodoListItem key={todo.id} {...todo} />
          ))}
        </ul>
      ) : (
        <p className="flex justify-center my-5 text-red-500 text-xl">{`List ${filter.toLowerCase()} tasks is empty!`}</p>
      )}
    </>
  );
};
