import React from 'react';
import { assets } from '@assets/assets';

const AppDownload = () => {
  return (
    <div className="text-center font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[tomato] mt-[100px]" id='app-download'>
      <p>
        For Better User Experience Download Our <br /> FoodieFave App
      </p>
      <div className="app-download-platforms flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mt-10">
        <img 
          className="w-32 sm:w-36 md:w-40 lg:w-44 transition-transform duration-500 cursor-pointer hover:scale-105" 
          src={assets.play_store} 
          alt="Play Store" 
        />
        <img 
          className="w-32 sm:w-36 md:w-40 lg:w-44 transition-transform duration-500 cursor-pointer hover:scale-105" 
          src={assets.app_store} 
          alt="App Store" 
        />
      </div>
    </div>
  )
}

export default AppDownload;
