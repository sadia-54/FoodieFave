import React, { useState, useContext } from 'react';
import { assets } from '@assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('menu');

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="py-5 flex justify-between items-center">
      {/* Logo */}
      <Link to='/'> <img 
        src={assets.logo} 
        alt="" 
        className="relative w-[83px] rounded-[13px]" 
      />
      </Link>

      {/* Navbar Menu */}
      <ul className="hidden lg:flex gap-5 text-[tomato] text-[18px] list-none">
        <Link to='/'
          onClick={() => setMenu('home')} 
          className={`${menu === 'home' ? 'pb-[2px] border-b-[2px] border-lightslategray' : ''}`}
        >
          Home
        </Link>
        <a 
          href="#explore-menu" 
          onClick={() => setMenu('menu')} 
          className={`${menu === 'menu' ? 'pb-[2px] border-b-[2px] border-lightslategray' : ''}`}
        >
          Menu
        </a>
        <a 
          href="#app-download" 
          onClick={() => setMenu('mobile-app')} 
          className={`${menu === 'mobile-app' ? 'pb-[2px] border-b-[2px] border-lightslategray' : ''}`}
        >
          Mobile-App
        </a>
        <a 
          href="#footer" 
          onClick={() => setMenu('contact-us')} 
          className={`${menu === 'contact-us' ? 'pb-[2px] border-b-[2px] border-lightslategray' : ''}`}
        >
          Contact Us
        </a>
      </ul>

      {/* Navbar Right */}
      <div className="flex items-center gap-10 lg:gap-8">
        <img src={assets.search_icon} alt="" className="w-[20px] lg:w-[22px]" />
        <div className="relative">
          <Link to='/cart'> <img src={assets.basket_icon} alt="" className="w-[20px] lg:w-[22px]" /> </Link>
          <div className={getTotalCartAmount() ? "dot absolute w-[10px] h-[10px] bg-[tomato] rounded-full -top-[8px] -right-[1px]" : ""}></div>
        </div>
        <button onClick= {()=>setShowLogin(true)} 
           className="bg-transparent text-[tomato] border border-[tomato] px-[30px] py-[10px] rounded-full cursor-pointer transition duration-300 hover:bg-[rgb(244,225,230)]">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;