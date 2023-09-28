import React from 'react'

export const Button = () => {
  return (
    <>
        <Button class={props.class} name={props.name} type={props.type} {...otherprops}>{props.text}</Button>
    </>
  )
}
