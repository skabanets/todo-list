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
      <h2>{`${filter} tasks:`}</h2>
      {filteredTodos.length ? (
        <ul>
          {filteredTodos.map(todo => (
            <TodoListItem key={todo.id} {...todo} />
          ))}
        </ul>
      ) : (
        <p>{`List ${filter.toLowerCase()} tasks is empty!`}</p>
      )}
    </>
  );
};
