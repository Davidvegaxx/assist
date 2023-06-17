import React from 'react'

const Dynamic = () => {
    let gender= 'male'
    console.log(gender);
    let randomNumbers= Math.random()
    let fbLink= 'https://www.facebook.com/'
    let absentTrainees=['Dami ', 'Dan','Lamar']
    console.log(absentTrainees);
  return (
    <div>
        <h2>Dynamic Component</h2>
        <h4>{gender} </h4>
        <h2>{randomNumbers} </h2>
        <a target='blank' href={fbLink}>Facebook</a>
        <h2>{absentTrainees} </h2>
    </div> 
  )
}

export default Dynamic