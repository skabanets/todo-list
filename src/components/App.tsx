import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../redux/todo/todoSlice';
import { NotificationLine } from './NotificationLine/NotificationLine';
import { Filters } from './Filters/Filters';
import { TodoList } from './TodoList/Todolist';
import { AddTodoForm } from './AddTodoForm/AddTodoForm';

export const App = () => {
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
