export const getFilteredTodos = (todos, filter) => {
  switch (filter) {
    case 'Active':
      return todos.filter(item => item.complited === false);
    case 'Completed':
      return todos.filter(item => item.complited === true);
    default:
      return todos;
  }
};
