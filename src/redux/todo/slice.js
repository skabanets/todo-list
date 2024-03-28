import { createSlice, nanoid } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    filter: 'All',
  },
  reducers: {
    addTodo: {
      prepare: ({ text }) => {
        return {
          payload: {
            id: nanoid(),
            text,
            complited: false,
            isEdit: false,
          },
        };
      },
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex(item => item.id === action.payload);
      state.todos.splice(index, 1);
    },
    toggleTodoComplited: (state, action) => {
      const todo = state.todos.find(item => item.id === action.payload);
      todo.complited = !todo.complited;
    },
    toggleIsEdit: (state, action) => {
      const todo = state.todos.find(item => item.id === action.payload);
      if (state.todos.some(item => item.isEdit)) {
        const editingTodo = state.todos.find(item => item.isEdit);
        editingTodo.isEdit = false;
      }
      todo.isEdit = !todo.isEdit;
    },
    editTodo: (state, action) => {
      const todo = state.todos.find(item => item.id === action.payload.id);
      todo.text = action.payload.textTodo;
      todo.isEdit = false;
    },
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  selectors: {
    selectTodos: state => state.todos,
    selectFilter: state => state.filter,
  },
});

export const todoReducer = slice.reducer;
export const { addTodo, deleteTodo, toggleTodoComplited, toggleIsEdit, editTodo, changeFilter } =
  slice.actions;
export const { selectTodos, selectFilter } = slice.selectors;
