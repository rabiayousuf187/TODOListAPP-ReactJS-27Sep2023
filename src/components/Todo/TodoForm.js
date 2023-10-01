import React, { useState } from "react";
import { Form, Row, Col, Input } from "reactstrap";
import ButtonComp from "../ButtonComp/ButtonComp";

const TodoForm = ({addTodos}) => {
    const [value, setValue] = useState([]);
    let handleSubmit = (event) =>{
        event.preventDefault();

        addTodos(value);
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
              placeholder="What is the task todo?"
              type="text"
              value={value}
              onChange={(e)=>{setValue(e.target.value)}}
            //   onChange={(e)=>{ e.target.value != "" ? setValue(e.target.value) : <AlertComp ""/>}}
            />
          </Col>
          <Col lg={2}>
            <ButtonComp text="Add" name='add' type='submit' id="add"></ButtonComp>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default TodoForm;
