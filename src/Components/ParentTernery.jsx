import React, { useState } from 'react'
import Ternery from './Ternery'



const ParentTernery = () => {
    const [loggedin, setLoggedIn] = useState(false)

  return (
    <div className='partern'>
        <h2>Parent Ternery</h2>
      <Ternery isLoggedIn={() => setLoggedIn(loggedin)}/>
    </div>
  )
}

export default ParentTernery













// const ParentTernery = () => {
//     const userLoggedIn = true
//   return (
//     <div>
//         <Ternery isLoggedIn={userLoggedIn}/>
      
//     </div>
//   )
// }

// export default ParentTernery
