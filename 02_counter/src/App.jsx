import { useState } from 'react'

import './App.css'

function App() {
const [counter, setCounter] = useState(0)
  // let counter = 15
  const plus = ()=>{
    console.log("value added",counter);
    // counter = counter +1
    setCounter(counter+1)

   
    }
    const min = ()=>{
      // console.log("value added",counter);
      // counter = counter +1
      if (counter>0){
        setCounter(counter-1)

      }

  }

  return (
    <>
    <h1>chai aur reacttt</h1>
    <h1>counter value : {counter} </h1>
<p>Footer :{counter}</p>
    <button
    onClick={plus}
    >plus</button>
    <button onClick={min}>minusss</button>


    </>
  )
}

export default App
