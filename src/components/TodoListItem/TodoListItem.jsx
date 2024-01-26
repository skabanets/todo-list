import { useDispatch } from 'react-redux';
import { deleteTodo, toggleIsEdit, toggleTodoComplited } from '../../redux/todo/slice';
import { useState } from 'react';

export const TodoListItem = ({ id, text, complited, isEdit }) => {
  const [textTodo, setTextTodo] = useState();
  const dispatch = useDispatch();

  const editTodo = text => {
    setTextTodo(text);
    dispatch(toggleIsEdit(id));
  };

  const handleChangeTodoText = e => {
    setTextTodo(e.target.value);
  };

  const handleAceptEdit = () => {
    dispatch(editTodo(id, textTodo));
  };

  return (
    <li>
      {!isEdit ? (
        <div>
          <p>{text}</p>
          <input
            type="checkbox"
            checked={complited}
            onChange={() => dispatch(toggleTodoComplited(id))}
          />
          <button type="button" onClick={() => editTodo(text)}>
            Edit
          </button>
          <button type="button" onClick={() => dispatch(deleteTodo(id))}>
            Delete
          </button>
        </div>
      ) : (
        <div>
          <input type="text" value={textTodo} onChange={handleChangeTodoText} />
          <button type="button" onClick={() => handleAceptEdit()}>
            OK
          </button>
          <button type="button" onClick={() => dispatch(toggleIsEdit(id))}>
            X
          </button>
        </div>
      )}
    </li>
  );
};
