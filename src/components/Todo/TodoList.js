import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use

// Configure Font Awesome to use the imported icons
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTrash, faPenToSquare);

 const TodoList = ({task}) => {
    console.log("list ====", task);
    return (
      <div className="todo">
        <p onClick={()=>{
          toggleCompleted(task.id)
        }} className={`${task.completed ? 'completed' : ""}`}>{task.task}</p>
        <div>
                  <FontAwesomeIcon icon={faTrash} />
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
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

