import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(newTodo);
    },
    deleteTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    toggleTodo: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.todos[index].completed = !state.todos[index].completed;
      }
    },
    fetchTodosStart: (state) => {
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo, fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } = todoSlice.actions;

export default todoSlice.reducer;
