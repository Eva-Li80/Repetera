import React, { useState } from 'react'

const EventHandler = () => {
    const [name , setName] = useState("anna")

    const handleHandler = () => {
        setName(name)
    }
  return (
    <div>
        <h1>eventhandler</h1>
      {name}
      <button onClick={handleHandler}>change name</button>
    </div>
  )
}

export default EventHandler















// const EventHandler = () => {
//     const [name, setName] = useState("")

//     const handleName = () => {
//         setName("Eva")
//     }


//   return (
//     <div>
//         {name}
//         <button onClick={handleName}>tryck</button>
      
//     </div>
//   )
// }

// export default EventHandler
