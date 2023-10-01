import React, { useState } from "react";
import TodoForm from "./TodoForm";
import CardComp from "../CardComp/CardComp";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

// for Universal Unique Identifier-128
uuidv4();

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);

    console.log("todos === ", todos);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };
  return (
    <>
      <div className="todowrapper">
        <CardComp>
          <TodoForm addTodos={addTodos}></TodoForm>
        </CardComp>

        {todos.map((todo, ind) => {
          return (
            <TodoList
              task={todo}
              key={ind}
              toggleComplete={toggleComplete}
            ></TodoList>
          );
        })}
      </div>
    </>
  );
};

export default TodoWrapper;
