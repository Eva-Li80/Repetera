import React, { useState } from 'react'

const EventHandler = () => {
    const [name , setName] = useState("anna")

    const handleHandler = () => {
        setName("kalle")
    }
  return (
    <div className='evenhan'>
        <h1>Eventhandler</h1>
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
