import React from 'react'
import '../styles/Footer.css'

const Footer = (props) => {
  return (
    <div>
        <h2 className='footer'>Footer Component</h2>
        <h2> {props.newColor}</h2>
    </div>
  )
}

export default Footer
// inline style for css: you can use the inline style on our jsx