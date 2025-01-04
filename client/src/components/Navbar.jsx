import React, { useState } from 'react';
import { assets } from '@assets/assets';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("menu");
  
  return (
    <div className="flex justify-between items-center py-5 px-8">
        <img src={assets.logo} alt="" className="h-auto w-[83px] rounded-lg" />
        
        <ul className="flex space-x-6 text-xl text-tomato">
          <Link 
            onClick={() => setMenu("home")} 
            className={`${menu === "home" ? "border-b-2 border-gray-600 pb-1" : ""}`}
          >
            Home
          </Link>
          <a 
            href='#explore-menu' 
            onClick={() => setMenu("menu")} 
            className={`${menu === "menu" ? "border-b-2 border-gray-600 pb-1" : ""}`}
          >
            Menu
          </a>
          <a 
            href='#app-download' 
            onClick={() => setMenu("mobile-app")} 
            className={`${menu === "mobile-app" ? "border-b-2 border-gray-600 pb-1" : ""}`}
          >
            Mobile-App
          </a>
          <a 
            href='#footer' 
            onClick={() => setMenu("contact-us")} 
            className={`${menu === "contact-us" ? "border-b-2 border-gray-600 pb-1" : ""}`}
          >
            Contact Us
          </a>
        </ul>
        
        <div className="flex items-center space-x-10">
          <img src={assets.search_icon} alt="" />
          
          <div className="relative">
            <img src={assets.basket_icon} alt="" />
            <div className="absolute top-[-8px] right-[-1px] w-2.5 h-2.5 bg-tomato rounded-full"></div>
          </div>
          
          <button className="bg-transparent text-tomato border border-tomato px-7 py-2.5 rounded-full transition duration-300 hover:bg-[#f4e1e6]">
            Sign In
          </button>
        </div>
    </div>
  );
}

export default Navbar;
