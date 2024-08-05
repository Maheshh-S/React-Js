import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let counter = 15
  const plus = ()=>{
    console.log("value added",counter);
    counter = counter +1

  }

  return (
    <>
    <h1>chai aur reacttt</h1>
    <h1>counter value : {counter} </h1>

    <button
    onClick={plus}
    >plus</button>
    <button>minusss</button>


    </>
  )
}

export default App
