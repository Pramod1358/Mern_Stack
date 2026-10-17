import './App.css'

import Cart1 from './Components/Cart1'
import Header from './Components/Header'
import Items from './Components/Items'
import { CartProvider } from './Context/Cart'



function App() {
  return (
    <CartProvider>
      <Header/>
      <div className=''>
      <Items/>
      <Cart1/>
      </div>
    </CartProvider>
  )
}

export default App