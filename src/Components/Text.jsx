import React from 'react'

const Text = ({text, name}) => {
  return (
    <div className='text'>
      <p>{text}</p>
      <p>{name}</p>
    </div>
  )
}

export default Text
