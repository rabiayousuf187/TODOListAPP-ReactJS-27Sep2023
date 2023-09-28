import React from 'react'

export const Button = () => {
  console.log("Button Props ==== ", props);
  return (
    <>
        <Button class={props.class} name={props.name} type={props.type} onClick={props.onClick} {...otherprops}>{props.text}</Button>
    </>
  )
}
