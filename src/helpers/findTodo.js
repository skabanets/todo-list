export const findTodo = (text, todos) => {
  const isEditTodo = todos.find(
    item => item.isEdit === true && item.text.toLowerCase() === text.toLowerCase()
  );
  if (isEditTodo) return false;

  const isExsist = todos.find(item => item.text.toLowerCase() === text.toLowerCase());
  if (isExsist) alert('This task already exists.');

  return isExsist;
};
