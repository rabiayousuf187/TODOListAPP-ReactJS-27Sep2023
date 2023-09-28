import React from 'react'

const Heading = ({hType,text}) => {
   console.log("hType === ",hType);
  return (
    <>
        <h1>{"Heading component" + text}</h1>
    </>
  )
}

export default Heading
