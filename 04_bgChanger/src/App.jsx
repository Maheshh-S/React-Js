
import { useState } from 'react';

function App() {
  const[color, setColor] = useState("")

  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor: color}} >
      <div className= " flex flex-wrap justify-center align-top p-5 font-extrabold text-center text-lg font-mono  text-cyan-500 "><h1>"You can change this bgColors by click on that buttons :)"</h1></div>
      <div className="fixed flex flex-wrap justify-center bottom-11 inset-x-0 px-2 ">
        <div className="  border flex flex-wrap gap-3 shadow-sky-900 shadow-xl bg-white p-2 rounded-2xl border-3 ">
          
          <button onClick={() => setColor("Red")} className=" bg rounded-full  shadow-fuchsia-500 shadow-md  outline-none px-4 " style={{backgroundColor:"red"}}>Red</button>


          <button onClick={() => setColor("green")} className=" rounded-full  shadow-fuchsia-500 shadow-md  outline-none px-4 " style={{backgroundColor:"Green"}}>Green</button>

          
          <button onClick={() => setColor("lightblue")} className=" rounded-full  shadow-fuchsia-500 shadow-md  outline-none px-4 " style={{backgroundColor:"lightblue"}}>Blue</button>

          
          <button onClick={() => setColor("yellow")} className=" rounded-full  shadow-fuchsia-500 shadow-md  outline-none px-4 " style={{backgroundColor:"yellow"}}>Yellow</button>

          
          <button onClick={() => setColor("Grey")} className=" rounded-full  shadow-fuchsia-500 shadow-md  outline-none px-4 " style={{backgroundColor:"Grey"}}>Grey</button>

          
          <button onClick={() => setColor("Black")} className=" rounded-full  shadow-fuchsia-500 shadow-md outline-none px-4 text-teal-50 " style={{backgroundColor:"Black"}}>Black</button>

          
          <button onClick={() => setColor("white")} className="    rounded-full shadow-fuchsia-500 shadow-md  outline-none px-4 " style={{backgroundColor:"White"}}>White</button>

          
          <button onClick={() => setColor("orange")} className=" rounded-full  shadow-fuchsia-500 shadow-md outline-none px-4 " style={{backgroundColor:"orange"}}>orange</button>

          

        </div>
      </div>

    </div>
  )
}

export default App
