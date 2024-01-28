import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selectTodos } from '../../redux/todo/slice';
import { useState } from 'react';
import { findTodo } from '../../helpers/findTodo';

export const AddTodoForm = () => {
  const todos = useSelector(selectTodos);
  const [textTodo, setTextTodo] = useState('');
  const dispatch = useDispatch();

  const handleChangeTodoText = e => {
    const { value } = e.target;
    setTextTodo(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (findTodo(textTodo, todos)) return;
    dispatch(addTodo({ text: textTodo.trim() }));
    setTextTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={textTodo} name="text" onChange={handleChangeTodoText} required />
      <button>Add Todo</button>
    </form>
  );
};
