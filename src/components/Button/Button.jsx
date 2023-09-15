import React from 'react'

const Button = ({text, cb, color}) => {
  return (
   <button className={color} onClick={cb}>

    {text}

   </button>
  )
}

export default Button