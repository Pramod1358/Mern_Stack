
import { useState } from 'react'
import './App.css'

function App() {
 
  let [color , setColor] = useState("black")
  //onclick method expects a call back function as a return statement 
  return (
  <div className='w-full h-screen duration-200 ' style={{backgroundColor : color}}>
    <div className='fixed flex flex-wrap justify-center gap-3 shadow-md bg-white bottom-12 inset-x-0 px-2 py-2 rounded-2xl mx-10'>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-500'
        onClick={() => setColor("green")}
      >
        Green
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-500'
         onClick={() => setColor("red")}
      >
        Red
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-500'
         onClick={() => setColor("yellow")}
      >
        Yellow
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-500'
         onClick={() => setColor("orange")}
      >
       orange
      </button>
      <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-purple-500'
         onClick={() => setColor("purple")}
      >
       purple
      </button>
    </div>

  </div>
  )
}

export default App
