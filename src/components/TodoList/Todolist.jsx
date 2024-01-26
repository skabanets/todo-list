import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todo/slice';
import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = () => {
  const todos = useSelector(selectTodos);

  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
