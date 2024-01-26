import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/Todolist';

export const TaskManager = () => {
  return (
    <div>
      <AddTodoForm />
      <TodoList />
    </div>
  );
};
