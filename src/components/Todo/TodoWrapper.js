import React, { useState } from "react";
import TodoForm from "./TodoForm";
import CardComp from "../CardComp/CardComp";
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

  return (
    <>
      <div className="todowrapper">
        <CardComp>
          <TodoForm addTodos={addTodos}></TodoForm>
        </CardComp>
      </div>
    </>
  );
};

export default TodoWrapper;
