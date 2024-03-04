import AndTecken from "./Components/AndTecken"
import Conditionale from "./Components/Consitinole"
import Destructuring from "./Components/Destructuring"
import EventHandler from "./Components/EventHandler"
import EventListener from "./Components/EventListener"
import EventObject from "./Components/EventObjects"
import HighFunc from "./Components/HighFunc"
import ParentTernery from "./Components/ParentTernery"
import Props from "./Components/Props"
import Ternery from "./Components/Ternery"
import "./mainstyle.css"
import Text from "./Components/Text"
import UseState from "./Components/UseState"
import Uttryck from "./Components/Uttryck"
import { useState } from "react"





function App() {
  const [name, setName] = useState("Eva-LI")
 
  return (
    <>
    <div>
      <Text text="Jsx text" name={name}/>
      <Uttryck/>
      <EventListener/>
      <EventObject/>
      <EventHandler/>
      <Props message="Hej hoppas allt väl.." name="Eva-Li"/>
      <UseState/>
      <Destructuring/>
     <HighFunc/>
     <Conditionale/>
     <Ternery/>
     <ParentTernery/>
     <AndTecken/>
    </div>
       
    </>
  )
}

export default App
