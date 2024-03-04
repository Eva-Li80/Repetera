import React from 'react'

const HigherOrderFunctions = () => {
    const arr = ["ett", "två", "tre"]
  return (
    <div>
        {arr.map((ar) => {
            return(
                <h1>{ar}</h1>
            )
        })}
      
    </div>
  )
}

export default HigherOrderFunctions
