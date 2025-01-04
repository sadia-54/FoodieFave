import React from 'react';

const Header = () => {
  return (
    <div className="relative h-[34vw] my-8 bg-cover bg-center rounded-xl" style={{ backgroundImage: "url('/header-img.png')" }}>
        <div className="absolute bottom-10 left-[6vw] max-w-[50%] flex flex-col items-start gap-[1.5vw] animate-fadeIn">
            <h2 className="font-medium text-white text-[max(4.5vw, 22px)]">
                Hungry? Order Your Favourite Food Here!
            </h2>
            <p className="text-white text-[1vw]">
                Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
            </p>
            <button className="bg-white text-tomato font-medium py-[1vw] px-[2.3vw] rounded-full text-[max(1vw, 13px)] hover:bg-[#f4e1e6]">
                View Menu
            </button>
        </div>
    </div>
  );
}

export default Header;
