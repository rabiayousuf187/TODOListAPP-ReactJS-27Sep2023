import React from "react";
import { Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use

// Configure Font Awesome to use the imported icons
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTrash, faPenToSquare);

const TodoList = ({ task, toggleCompleted, editTodo, deleteTodo }) => {
  console.log("list ====", task);
  return (
    <div className="todo">
      <Row>
        <Col md='auto'>
          <p
            onClick={() => {
              toggleCompleted(task.id);
            }}
            className={`${task.completed ? "completed" : ""}`}
          style={{marginBottom: '0px',}}>
            {task.task}
          </p>
        </Col>
        <Col md='auto'>
          <div>
            <FontAwesomeIcon
              icon={faTrash}
              onClick={() => {
                deleteTodo(task.id);
              }}
              
              className="icon"
            />
            <FontAwesomeIcon
              icon={faPenToSquare}
               className="icon"
               onClick={() => {
                editTodo(task.id);
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default TodoList;

// import React from "react";
// import TableComp from "../TableComp/TableComp";

// const TodoList = ({task}) => {
//   console.log("list ====", task);
//   return (
//     <div className="todo">
//       <TableComp task={task}></TableComp>
//     </div>
//   );
// };

// export default TodoList;
