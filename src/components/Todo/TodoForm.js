import React from "react";
import { Form, Row, Col, Input } from "reactstrap";
import ButtonComp from "../Button/Button";

const TodoForm = () => {
  return (
    <>
      <Form id="todoForm">
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Input
              id="todo"
              name="todo"
              placeholder="What is the task todo?"
              type="text"
            />
          </Col>
          <Col>
            <ButtonComp text="Add" name='add' type='submit'></ButtonComp>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default TodoForm;
