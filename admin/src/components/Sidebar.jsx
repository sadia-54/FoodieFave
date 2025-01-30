import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar text-[max(1vw, 10px)] w-[18%] min-h-[100vh] border border-[1.5px] border-solid border-[a9a9a9] border-t-0 '>
        <div className="sidebar-options pt-[50px] pl-[20%] flex flex-col gap-[20px] ">
            <NavLink to='/add'
            className={({ isActive }) => 
    `sidebar-option flex items-center gap-[12px] border border-[1px] border-solid border-[a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px 0px 0px 3px] cursor-pointer ${
      isActive ? "active" : ""
    }`
  }
             >
                <img src={assets.add_icon} alt="" />
                <p className="max-md:hidden">Add Items</p>
            </NavLink>
            <NavLink to='/list'
            className={({ isActive }) => 
    `sidebar-option flex items-center gap-[12px] border border-[1px] border-solid border-[a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px 0px 0px 3px] cursor-pointer ${
      isActive ? "active" : ""
    }`
  }
            >
                <img src={assets.order_icon} alt="" />
                <p className="max-md:hidden">List Items</p>
            </NavLink>
            <NavLink to='/orders'
            className={({ isActive }) => 
    `sidebar-option flex items-center gap-[12px] border border-[1px] border-solid border-[a9a9a9] border-r-0 py-[8px] px-[10px] rounded-[3px 0px 0px 3px] cursor-pointer ${
      isActive ? "active" : ""
    }`
  }>
                <img src={assets.order_icon} alt="" />
                <p className="max-md:hidden">Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Sidebar