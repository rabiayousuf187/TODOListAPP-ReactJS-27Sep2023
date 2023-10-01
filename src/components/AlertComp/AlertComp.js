import React from "react";

const AlertComp = ({color, text}) => {
  color == undefined ? color = "" : color = color;
  text == "" ? ()=>{text = 'Invalid Content'; color='danger'} : text = text;

  console.log("aLert === ", color, text)
  return (
    <>
      <Alert color={color}>{text}</Alert>
    </>
  );
};

export default AlertComp;
