import React from "react";
import { Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use

// Configure Font Awesome to use the imported icons
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTrash, faPenToSquare);

const TodoList = ({ task, toggleCompleted, editTodo, deleteTodo }) => {
  console.log("list ====", task);
  return (
    <Row>
      <div className="todo">
        <Col>
          <p
            onClick={() => {
              toggleCompleted(task.id);
            }}
            className={`${task.completed ? "completed" : ""}`}
          >
            {task.task}
          </p>
        </Col>

        <div>
          <FontAwesomeIcon
            icon={faTrash}
            onClick={() => {
              editTodo(task.id);
            }}
          />
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => {
              deleteTodo(task.id);
            }}
          />
        </div>
      </div>
    </Row>
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
