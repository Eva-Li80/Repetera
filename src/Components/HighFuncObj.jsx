import React from 'react'

const HighFuncObj = () => {
    const nums = [{numett: "ett"}, {numtvå: "två"}]
  return (
    <div>
        <ul>
            {nums.map((num) => (
                <h2>{num.numett} {num.numtvå}</h2>
             
            ))}
        </ul>
      
    </div>
  )
}

export default HighFuncObj
