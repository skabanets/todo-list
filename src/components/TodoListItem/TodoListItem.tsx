import React, { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  selectTodos,
  toggleIsEdit,
  toggleTodoComplited,
} from '../../redux/todo/todoSlice';
import { useState } from 'react';
import { findTodo } from '../../helpers/findTodo';
import { MdEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { Todo } from '../../types';

export const TodoListItem = (todo: Todo) => {
  const { id, text, complited, isEdit } = todo;

  const todos = useSelector(selectTodos);
  const [textTodo, setTextTodo] = useState<string>('');
  const dispatch = useDispatch();

  const editTodoText = (text: string, id: string) => {
    setTextTodo(text);
    dispatch(toggleIsEdit(id));
  };

  const handleChangeTodoText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextTodo(e.target.value);
  };

  const handleAceptEdit = () => {
    if (findTodo(textTodo, todos)) return;

    if (!textTodo) {
      alert('Поле не должно быть пустым! ');
      return;
    }

    dispatch(editTodo({ id, text: textTodo }));
  };

  return (
    <li className="flex justify-center w-[280px] h-[120px] border-1 border-black shadow-md rounded-md bg-cyan-500 p-[10px] relative">
      {!isEdit ? (
        <div className="flex flex-row items-center gap-2 w-full">
          <input
            type="checkbox"
            checked={complited}
            onChange={() => dispatch(toggleTodoComplited(id))}
          />
          <p className="h-[60px] w-[240px] flex items-center justify-center overflow-y-auto text-center">
            {text}
          </p>
          <div className="flex gap-2 absolute top-0 right-0 transform -translate-x-1/4 translate-y-2/4">
            <button type="button" onClick={() => editTodoText(text, id)}>
              <MdEdit className="hover:fill-[#800080]" />
            </button>
            <button type="button" onClick={() => dispatch(deleteTodo(id))}>
              <MdDelete className="hover:fill-red-600" />
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-2">
          <textarea
            className="resize-none rounded-md p-2.5 h-[60px] w-[240px] overflow-y-auto"
            value={textTodo}
            onChange={handleChangeTodoText}
          />
          <button
            className="border-2 border-black rounded-md w-[80px] text-[14px] py-[4px] bg-slate-300"
            type="button"
            onClick={handleAceptEdit}
          >
            Accept
          </button>
        </div>
      )}
    </li>
  );
};
