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
       return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const deleteTodo = (id)=>{
    setTodos(todos.map((todo)=>{
        return todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo

    }))
  }
  const editTodo = (id)=>{
    setTodos(todos.filter((todo)=>{
        return todo.id !== id

    }))
  }
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
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}
            ></TodoList>
          );
        })}
      </div>
    </>
  );
};

export default TodoWrapper;
