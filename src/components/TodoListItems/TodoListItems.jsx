import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todo/slice';
import { TodoListItem } from '../TodoListItem/TodoListItem.JSX';

export const TodoListItems = () => {
  const todos = useSelector(selectTodos);
  console.log(todos);

  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
