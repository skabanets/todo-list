import { Todo, Filter, TodoIdText } from './../../types/index';
import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit';

interface State {
  todos: Todo[];
  filter: Filter;
}

const initialState: State = {
  todos: [],
  filter: 'All',
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      prepare: (text: string) => {
        return {
          payload: {
            id: nanoid(),
            text,
            complited: false,
            isEdit: false,
          },
        };
      },
      reducer: (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      },
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex(item => item.id === action.payload);
      state.todos.splice(index, 1);
    },
    toggleTodoComplited: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(item => item.id === action.payload);
      if (todo) {
        todo.complited = !todo.complited;
      }
    },
    toggleIsEdit: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find(item => item.id === action.payload);
      if (state.todos.some(item => item.isEdit)) {
        const editingTodo = state.todos.find(item => item.isEdit);
        if (editingTodo) {
          editingTodo.isEdit = false;
        }
      }

      if (todo) {
        todo.isEdit = !todo.isEdit;
      }
    },
    editTodo: (state, action: PayloadAction<TodoIdText>) => {
      const todo = state.todos.find(item => item.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.isEdit = false;
      }
    },
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;
    },
  },
  selectors: {
    selectTodos: state => state.todos,
    selectFilter: state => state.filter,
  },
});

export const todoReducer = todoSlice.reducer;
export const { addTodo, deleteTodo, toggleTodoComplited, toggleIsEdit, editTodo, changeFilter } =
  todoSlice.actions;
export const { selectTodos, selectFilter } = todoSlice.selectors;
