import React from 'react'

const Destructuring = () => {
    const person = {name: "Eva-Li", age: 43}
    const {name, age} = person

  return (
    <div>
        <h1>descrtione</h1>
        <h3>{name}</h3>
        <p>{age}</p>
      
    </div>
  )
}

export default Destructuring
