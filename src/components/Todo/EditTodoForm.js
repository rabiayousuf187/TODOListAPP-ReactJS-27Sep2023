import React, { useState } from "react";
import { Form, Row, Col, Input } from "reactstrap";
import ButtonComp from "../ButtonComp/ButtonComp";

const EditTodoForm = ({editTodos, task}) => {
    const [value, setValue] = useState(task.task);
    let handleSubmit = (event) =>{
        event.preventDefault();

        editTodos(value, task.id);
        setValue("")
        console.log(event.target.value);
    }
  return (
    <>
      <Form id="todoForm" onSubmit={handleSubmit}>
        <Row className="row-cols-lg-auto g-3 justify-content-center align-items-center">
          <Col lg={10}>
            <Input
              id="todo"
              name="todo"
              placeholder="Update Task"
              type="text"
              value={value}
              onChange={(e)=>{setValue(e.target.value)}}
            //   onChange={(e)=>{ e.target.value != "" ? setValue(e.target.value) : <AlertComp ""/>}}
            />
          </Col>
          <Col lg={2}>
            <ButtonComp text="Update" name='add' type='submit' id="update"></ButtonComp>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default EditTodoForm;
