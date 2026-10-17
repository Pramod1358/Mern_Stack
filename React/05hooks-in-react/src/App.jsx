import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(10)

  const increment = () =>{
    setCount(count+1);
  }

  const decrement = () =>{
    setCount(count-1);
  }
  return (
    
    <div className='pramod'>
     <h1>Hello my name is pramod </h1>
     <h1>Counter : {count}</h1>
     <button onClick={increment} >Increment by 1</button>
      <button onClick={decrement}>Decrement by 1</button>
    </div>
    
  )
}

export default App
