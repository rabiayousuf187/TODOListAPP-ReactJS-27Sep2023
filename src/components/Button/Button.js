import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {
  console.log("Button Props ==== ", props);
  
  return (
    <>
      <Button name={props.name} type={props.type} class={props.class}  onClick={props.onClick} {...otherprops}>{props.text}</Button>
    </>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  class: PropTypes.string,
}

export default Button;
