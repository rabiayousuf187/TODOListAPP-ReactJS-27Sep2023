import React from 'react'
import PropTypes from 'prop-types'

const Button =({text, styleClass, name, type, otherprops, onClick})=> {
  console.log("Button Props ==== ", text, styleClass, name, type, otherprops);
  
  return (
    <>
      <Button >{text}</Button>
      {/* <Button name={name} type={type} className={`btn btn-${styleClass}`}  onClick={onClick}>{text}</Button> */}
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

export default Button;
