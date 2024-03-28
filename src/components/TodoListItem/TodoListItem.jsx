import { useDispatch, useSelector } from 'react-redux';
import {
  deleteTodo,
  editTodo,
  selectTodos,
  toggleIsEdit,
  toggleTodoComplited,
} from '../../redux/todo/slice';
import { useState } from 'react';
import { findTodo } from '../../helpers/findTodo';

export const TodoListItem = ({ id, text, complited, isEdit }) => {
  const todos = useSelector(selectTodos);
  const [textTodo, setTextTodo] = useState();
  const dispatch = useDispatch();

  const editTodoText = (text, id) => {
    setTextTodo(text);
    dispatch(toggleIsEdit(id));
  };

  const handleChangeTodoText = e => {
    setTextTodo(e.target.value);
  };

  const handleAceptEdit = () => {
    if (findTodo(textTodo, todos)) return;
    dispatch(editTodo({ id, textTodo }));
  };

  return (
    <li>
      {!isEdit ? (
        <div>
          <input
            type="checkbox"
            checked={complited}
            onChange={() => dispatch(toggleTodoComplited(id))}
          />
          <p>{text}</p>
          <button type="button" onClick={() => editTodoText(text, id)}>
            Edit
          </button>
          <button type="button" onClick={() => dispatch(deleteTodo(id))}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          <input type="text" value={textTodo} onChange={handleChangeTodoText} />
          <button type="button" onClick={handleAceptEdit}>
            Accept
          </button>
        </div>
      )}
    </li>
  );
};
