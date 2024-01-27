import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todo/slice';

export const NotificationLine = () => {
  const todos = useSelector(selectTodos);
  const activeTodos = todos.reduce((total, item) => (!item.complited ? (total += 1) : total), 0);
  console.log(activeTodos);

  return (
    <div>
      {!todos.length && <h2>Your task list is empty, create a new task!</h2>}
      {todos.length && activeTodos ? (
        <h2>{`Your active tasks - ${activeTodos} `}</h2>
      ) : (
        <h2>All tasks completed!</h2>
      )}
    </div>
  );
};
