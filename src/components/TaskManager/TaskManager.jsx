import { useSelector } from 'react-redux';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { Filters } from '../Filters/Filters';
import { NotificationLine } from '../NotificationLine/NotificationLine';
import { TodoList } from '../TodoList/Todolist';
import { selectTodos } from '../../redux/todo/slice';

export const TaskManager = () => {
  const todos = useSelector(selectTodos);

  return (
    <div>
      <AddTodoForm />
      <NotificationLine />
      {todos.length ? (
        <div>
          <Filters />
          <TodoList />
        </div>
      ) : (
        <h2 className="flex justify-center my-5 text-red-500 text-xl">
          Your task list is empty, create a new task!
        </h2>
      )}
    </div>
  );
};
