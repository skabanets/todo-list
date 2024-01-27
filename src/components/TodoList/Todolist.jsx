import { useSelector } from 'react-redux';
import { selectFilter, selectTodos } from '../../redux/todo/slice';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  const filter = useSelector(selectFilter);

  const getFilteredTodos = (todos, filter) => {
    switch (filter) {
      case 'active':
        return todos.filter(item => item.complited === false);
      case 'complited':
        return todos.filter(item => item.complited === true);
      default:
        return todos;
    }
  };

  const filteredTodos = getFilteredTodos(todos, filter);

  return (
    <ul>
      {filteredTodos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
