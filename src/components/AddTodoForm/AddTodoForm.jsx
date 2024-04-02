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
    <form className="flex flex-col w-[400px] mx-auto gap-2 my-5" onSubmit={handleSubmit}>
      <input
        className="border-2 border-black rounded-md shadow-md h-8 px-2 py-4"
        type="text"
        value={textTodo}
        name="text"
        onChange={handleChangeTodoText}
        required
      />
      <button className="bg-teal-500 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300">
        Add Todo
      </button>
    </form>
  );
};
