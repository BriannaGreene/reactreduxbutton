import React from 'react'

const Button = ({ handleClick, text, color }) => {
  return <button style={{'backgroundColor': color}}onClick={handleClick}>{text}</button>
}

export default Button
