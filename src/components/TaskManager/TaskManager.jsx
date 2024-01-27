import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { Filters } from '../Filters/Filters';
import { TodoList } from '../TodoList/Todolist';

export const TaskManager = () => {
  return (
    <div>
      <AddTodoForm />
      <Filters />
      <TodoList />
    </div>
  );
};
