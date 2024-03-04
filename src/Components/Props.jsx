import React from 'react'

const Props = ({ message, name}) => {
  return (
    <div className='props'>
        <p>{message}</p>
        <h1>{name}</h1>
    </div>
  )
}

export default Props
