import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import UserContextProvider from './context/userContextProvider'
import Login from './Components/login'
import Profile from './Components/profile'


function App() {

  return (
   <>
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>
   </>
  )
}

export default App
