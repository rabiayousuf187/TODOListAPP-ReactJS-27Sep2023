import React from "react";
import { Form, Row, Col, Input } from "reactstrap";
import ButtonComp from "../Button/Button";

const TodoForm = () => {
  return (
    <>
      <Form>
        <Row className="row-cols-lg-auto g-3 align-items-center">
          <Col>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="something@idk.cool"
              ty9pe="email"
            />
          </Col>            
          <Col>
            <ButtonComp></ButtonComp>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default TodoForm;
