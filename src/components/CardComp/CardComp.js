import React from "react";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const CardComp = (props) => {
  console.log('Carrd ==== ', props);
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
            <CardTitle tag="h2" style={{textAlign: 'center',}}>Manage Your Future Plain
            <h6>Todo List</h6></CardTitle>
           
            {props.children}
          </CardImgOverlay>
        </Card>
      </div>
    </>
  );
};

export default CardComp;
