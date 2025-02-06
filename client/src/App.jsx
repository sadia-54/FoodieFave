import React, {useState} from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import PlaceOrder from './pages/PlaceOrder'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import LoginModal from './components/LoginModal'
import Verify from './pages/Verify'

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin? <LoginModal setShowLogin={setShowLogin} /> : <></>}

     <div className='app'>
      <Navbar setShowLogin = {setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceOrder/>}/>
        <Route path='/verify' element={<Verify/>}/>
      </Routes>
    </div>
    <Footer/>
    
    </>
  )
}

export default App