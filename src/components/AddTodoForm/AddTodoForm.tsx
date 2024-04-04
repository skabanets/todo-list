import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selectTodos } from '../../redux/todo/todoSlice';
import { useState } from 'react';
import { findTodo } from '../../helpers/findTodo';

export const AddTodoForm = () => {
  const todos = useSelector(selectTodos);
  const [textTodo, setTextTodo] = useState<string>('');
  const dispatch = useDispatch();

  const handleChangeTodoText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextTodo(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (findTodo(textTodo, todos)) return;

    const trimmedText = textTodo.trim();
    if (!trimmedText) return;

    dispatch(addTodo(trimmedText));
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
