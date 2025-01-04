import React from 'react';
import { assets } from '@assets/assets';

const AppDownload = () => {
  return (
    <div className="app-download text-center mt-[100px] text-[max(2.3vw, 20px)] font-medium text-tomato">
      <p>
        For Better User Experience Download Our <br /> FoodieFave App
      </p>
      <div className="app-download-platforms flex justify-center gap-[max(2vw, 10px)] mt-[40px]">
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
