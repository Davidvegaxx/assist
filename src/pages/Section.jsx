import React from 'react'

const Section = (props) => {
  return (
    <div>
        <h2 style={{backgroundColor:'yellow',color:'green'}}>Section Component</h2>
        <h2> {props.newColor}</h2>
    </div>
  )
}

export default Section