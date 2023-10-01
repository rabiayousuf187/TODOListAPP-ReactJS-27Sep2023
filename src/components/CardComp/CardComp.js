import React, { Children } from "react";
import {Card, CardImg, CardImgOverlay, CardTitle, CardText} from 'reactstrap'
import TodoForm from "../Todo/TodoForm";


const CardComp = (props) => {
  return (
    <>
      <div>
        <Card inverse>
          <CardImg
            alt="Card image cap"
            src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_1280.jpg"
            // src="https://picsum.photos/900/270?grayscale"
            style={{
              height: 270,
            }}
            width="100%"
          />
          <CardImgOverlay>
            <CardTitle tag="h2">What are the Future Plain??</CardTitle>
            <TodoForm></TodoForm>
          </CardImgOverlay>
        </Card>
      </div>
    </>
  );
};

export default CardComp;