import React from 'react'


const HighFunc = () => {
    const arr = ["ett", "två", "tre"]
    return (
      <div className='highfun'>
          {arr.map((ar) => {
              return(
                  <h1>{ar}</h1>
              )
          })}
        
      </div>
    )
}

export default HighFunc
