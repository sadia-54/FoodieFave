import React, { useContext } from 'react'
import { assets } from '@assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <div className='w-full m-auto rounded-[15px] shadow-[0px_0px_10px_black] transition-all duration-400 animate-[fadeIn_1.2s]'>
            <div className="food-item-image-container relative">
                <img className="w-full rounded-[15px_15px_0px_0px]" src={image} alt="" />
                {
                    !cartItems[id]
                    ? <img className='absolute w-[35px] bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="Add Icon" />
                    : <div className="absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white">
                        <img onClick={()=> removeFromCart(id)} className="cursor-pointer mr-2" src={assets.remove_icon_red} alt="Remove Icon" />
                        <p className="mr-2">{cartItems[id]}</p>
                        <img onClick={()=> addToCart(id)} className="cursor-pointer" src={assets.add_icon_green} alt="Add Icon" />
                    </div>
                }
            </div>
            <div className="food-item-info p-[20px]">
                <div className="flex justify-between items-center mb-[10px]">
                    <p className="text-[tomato] text-[20px] font-medium">{name}</p>
                    <img className="w-[70px]" src={assets.rating_starts} alt="Rating Stars" />
                </div>
                <p className="food-item-description text-[lightslategrey] text-[15px]">
                    {description}
                </p>
                <p className="food-item-price text-[20px] font-medium text-[tomato] my-[10px]">
                    TK. {price}
                </p>
            </div>
        </div>
    ) 
}

export default FoodItem
