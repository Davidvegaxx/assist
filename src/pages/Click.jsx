import React from 'react'

const Click = () => {
    function handleClick(){
        console.log('you clicked me')
    }
        function handleClickAgain(){
            console.log('you clicked me agan')
    }
    let handleClickEvent = (age)=>{
        console.log(`I am ${age} years old`)
    }

    let handleClickEvent2 = (Name)=>{
        console.log(`My name is ${Name}`)
    }
  return (
    <div className='container'>
        <h2 className='text-danger'>click Component</h2>
        <button className='btn btn-primary text-white' onClick={handleClick}>click moi</button>
        <button className='btn btn-danger text-white' onClick={handleClickAgain}>click me again</button>
        <button className='btn btn-secondary text-white' onClick={()=>handleClickEvent(100)}>
        btn with parameter and argument
        </button>
        <button className='btn btn-secondary text-white' onClick={()=>handleClickEvent2('David')}>My Name</button>

    </div>
  )
}

export default Click