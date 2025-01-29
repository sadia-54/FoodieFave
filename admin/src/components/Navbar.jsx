import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between items-center'>
        <img className='logo relative w-[70px] rounded-[10px] ' src={assets.logo} alt="" />
        <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar