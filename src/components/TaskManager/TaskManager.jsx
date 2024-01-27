import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { Filters } from '../Filters/Filters';
import { NotificationLine } from '../NotificationLine/NotificationLine';
import { TodoList } from '../TodoList/Todolist';

export const TaskManager = () => {
  return (
    <div>
      <AddTodoForm />
      <NotificationLine />
      <Filters />
      <TodoList />
    </div>
  );
};
