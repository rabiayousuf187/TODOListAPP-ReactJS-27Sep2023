import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";

const ButtonComp = ({ text, color, className, name, type, onClick }) => {

  console.log("Button Props ==== ", text, color, className, name, type, onClick);
  color === undefined ? color ='primary' : color = color;
  return (
    <>
      <Button color={color} size="" onClick={onClick}>{text}</Button>
      
      {/* <Button onClick={onClick}>{props.text}</Button> */}
      {/* <Button onClick={onClick}>{text}</Button> */}
      {/* <Button name={name} type={type} className={`btn btn-${styleClass}`}  onClick={onClick}>{text}</Button> */}
    </>
  );
};

ButtonComp.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default ButtonComp;
