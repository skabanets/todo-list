import { createSlice, nanoid } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: {
      prepare: ({ text }) => {
        return {
          payload: {
            id: nanoid(),
            text,
            complited: false,
          },
        };
      },
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(item => item.id === action.payload.id);
      state.todos.splice(index, 1);
    },
    toggleTodoComplited: (state, action) => {
      const toggleTodo = state.todos.find(item => item.id === action.payload.id);
      toggleTodo.complited = !toggleTodo.complited;
    },
  },
  selectors: {
    selectTodos: state => state.todos,
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, toggleTodoComplited } = slice.actions;
export const { selectTodos } = slice.selectors;
