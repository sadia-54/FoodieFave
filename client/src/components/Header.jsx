import React from 'react';

const Header = () => {
  return (
    <div className="h-[34vw] my-[30px] mx-auto bg-[url('/header-img.png')] bg-no-repeat bg-center bg-cover relative rounded-lg">
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">
        <h2 className="text-white font-semibold text-[18px] sm:text-[22px] md:text-[26px] lg:text-[30px] xl:text-[36px] leading-tight">
          Hungry? Order Your Favourite Food Here!
        </h2>
        <p className="text-white text-[1vw] hidden md:block">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>
        <button className="border-none text-[tomato] font-medium py-[1vw] px-[2.3vw] bg-white text-[max(1vw,13px)] rounded-full hover:bg-[#f4e1e6]">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
