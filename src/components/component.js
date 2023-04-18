import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../reducers/counter/counterSlice";
import { addTodo, deleteTodo, toggleTodo } from "../reducers/todos/todoSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h2>Counter</h2>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  const handleAddTodo = (event) => {
    event.preventDefault();
    const input = event.target.elements.todo;
    if (input.value.trim()) {
      dispatch(addTodo(input.value.trim()));
      input.value = "";
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todo" placeholder="Add todo" />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { Counter, TodoList };
