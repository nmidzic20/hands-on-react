import React from 'react'
import "./Button.scss"
import { Link } from 'react-router-dom'

const Button = ({ children }) => {
  return (
    <Link to="/courses" className="Button Button_secondary">{children}</Link> 
  )
}

export default Button