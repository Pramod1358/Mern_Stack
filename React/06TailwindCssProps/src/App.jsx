import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Card from './Components/Card'


let age=26;
let arr = [1 , 2 , 3]
let dict ={
  name : "Pramod Korada",
  age : 123
}

function App() {
  

  return (
   <>
    <Card username = "Pramod Korada" age={age} arr={arr}  obj={dict}/>
    <Card username='jyoshendra'/>
    <Card age='12'/>
   </>
  )
}

export default App
