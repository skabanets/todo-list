import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';

export const TaskManager = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};
