import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../../redux/todo/slice';

export const NotificationLine = () => {
  const todos = useSelector(selectTodos);
  const activeTodos = todos.reduce((total, item) => (!item.complited ? (total += 1) : total), 0);

  return (
    <div>
      {todos.length !== 0 && activeTodos !== 0 && <h2>{`Your active tasks (${activeTodos}) `}</h2>}
      {todos.length !== 0 && activeTodos === 0 && <h2>All tasks completed!</h2>}
    </div>
  );
};
