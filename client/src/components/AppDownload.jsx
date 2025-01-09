import React from 'react';
import { assets } from '@assets/assets';

const AppDownload = () => {
  return (
    <div className="text-center font-medium text-[tomato] mt-[100px] text-[2.3vw] sm:text-[20px]" id='app-download'>
      <p>
        For Better User Experience Download Our <br /> FoodieFave App
      </p>
      <div className="app-download-platforms flex justify-center gap-[max(3vw, 20px)] mt-[40px]">
        <img 
          className="w-[max(30vw, 120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105" 
          src={assets.play_store} 
          alt="Play Store" 
        />
        <img 
          className="w-[max(30vw, 120px)] max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-105" 
          src={assets.app_store} 
          alt="App Store" 
        />
      </div>
    </div>
  )
}

export default AppDownload;
