import { useState } from 'react'
import './App.css'
import Card from './componets/Card'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<h1 className='bg-green-400 text-black p-4 rounded-xl mb-6' >Tailwind CSSS</h1>
<Card username = "me and code with chai" btnText = "Clickss" />
<Card username= "me and uoyy" btnText="cliksk"/>




    </>
  )
}

export default App
