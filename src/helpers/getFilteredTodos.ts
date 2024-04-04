import { Filter, Todo } from '../types/index'

export const getFilteredTodos = (todos: Todo[], filter: Filter): Todo[] => {
  switch (filter) {
    case 'Active':
      return todos.filter(item => item.complited === false)
    case 'Completed':
      return todos.filter(item => item.complited === true)
    default:
      return todos
  }
}
