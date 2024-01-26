import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todo/slice';

export const AddTodoForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const submit = data => {
    dispatch(addTodo(data));
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input type="text" {...register('text')} required />
      <button>Add Todo</button>
    </form>
  );
};
