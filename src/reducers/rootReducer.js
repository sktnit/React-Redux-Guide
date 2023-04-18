import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counter/counterSlice';
import todoReducer from './todos/todoSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export default rootReducer;
