import React, { useState } from "react";
import { Col, Row } from "reactstrap";
import TodoForm from "./TodoForm";
import CardComp from "../CardComp/CardComp";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from "./EditTodoForm";

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

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id != id;
      })
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, task, isEditing: !todo.isEditing }
          : todo;
      })
    );
  };
  return (
    <>
      <div className="todowrapper">
        <CardComp>
          <TodoForm addTodos={addTodos}></TodoForm>
        </CardComp>

        <Row className="title">
          <Col md="auto">
            <p style={{ marginBottom: "0px" }}>Task List</p>
          </Col>
          <Col md="auto">
            <div>
              <p style={{ marginBottom: "0px" }}>Status</p>
            </div>
          </Col>
        </Row>
        {todos.map((todo, ind) => {
          return todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} />
          ) : (
            <TodoList
              task={todo}
              key={ind}
              toggleComplete={toggleComplete}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            ></TodoList>
          );
        })}
      </div>
    </>
  );
};

export default TodoWrapper;
