import React from "react";
import { Table } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons"; // Import the icons you want to use

// Configure Font Awesome to use the imported icons
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faTrash, faPenToSquare);

const TableComp = ({ task }) => {
  console.log("Table Data ==== ", task);
  return (
    <div>
      <Table hover responsive striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Task</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {task.map((item, ind) => {
            console.log("***item , ind", item, ind);
            return (
              <tr>
                <th scope="row" key={item.id}>
                  {ind + 1}
                </th>
                <td>{item}</td>
                <td>
                  <FontAwesomeIcon icon={faTrash} />
                  <FontAwesomeIcon icon={faPenToSquare} />
                </td>
              </tr>
            );
          })}
          {/* <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr> */}
        </tbody> 
      </Table>
    </div>
  );
};

export default TableComp;
