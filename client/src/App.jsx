import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/Footer'

const App = () => {
  return (
    <>

     <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    
    </>
  )
}

export default App