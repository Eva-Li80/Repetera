import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0)
  return (
    <div className='usestate'>
        {count}
        <button onClick={() => setCount(count + 1)}>add</button>
      
    </div>
  )
}

export default UseState
