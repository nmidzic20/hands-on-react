import React from 'react'
import "./Button.scss"

const Button = ( {children} ) => {
  return (
    <button href="courses.html" className="Button Button_secondary">{children}</button> 
  )
}

export default Button