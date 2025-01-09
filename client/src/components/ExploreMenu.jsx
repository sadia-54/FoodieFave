import React from 'react';
import { menu_list } from '@assets/assets';

const ExploreMenu = ({ category, setCategory }) => {

  return (
    <div className="explore-menu flex flex-col gap-[20px]" id = "explore-menu">
      <h1 className="text-[tomato] font-medium text-3xl">Explore Our Menu</h1>
      <p className="explore-menu-text max-w-[60%] text-gray-500">
        Start your meal with our range of delicious appetizers, from fresh salads to spicy hot delights, perfect to kick off your dining experience.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-[30px] text-center my-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        {menu_list.map((item, index) => {
          return (
            <div 
              key={index} 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
              className="explore-menu-list-item text-center cursor-pointer"
            >
              <img 
                className={`w-[7.5vw] min-w-[80px] rounded-full transition-all duration-200 ${category === item.menu_name ? "border-4 border-[tomato] p-1" : ""}`} 
                src={item.menu_image} 
                alt="" 
              />
              <p className="mt-[10px] pointer text-gray-500 text-[max(1.4vw, 16px)]">{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr className="my-2 bg-light-gray h-[2px] border-none" />
    </div>
  )
}

export default ExploreMenu;
