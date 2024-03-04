import React, { useState } from 'react'
import Ternery from './Ternery'

import React from 'react'

const ParentTernery = () => {
    const [loggedin, setLoggedIn] = useState(false)

  return (
    <div>
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
