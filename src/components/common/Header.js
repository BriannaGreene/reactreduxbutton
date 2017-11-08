import React from 'react'

const Header = ({ color, text }) => {
  return <div style={{'backgroundColor': color}}>{text}</div>
}

export default Header
