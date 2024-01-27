import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from '../../redux/todo/slice';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const getFilteredTodos = (todos, filter) => {
    switch (filter) {
      case 'Active':
        return todos.filter(item => item.complited === false);
      case 'Complited':
        return todos.filter(item => item.complited === true);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos(todos, filter);

  console.log(filter);
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
