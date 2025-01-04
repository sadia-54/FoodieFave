import React, { useContext } from 'react'
import { assets } from '@assets/assets'
import { StoreContext } from '../context/StoreContext'

const FoodItem = ({id, name, price, description, image}) => {

    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    return (
        <div className='food-item flex flex-col items-center'>
            <div className="food-item-image-container relative">
                <img className="food-item-image w-full h-full object-cover rounded-lg" src={image} alt="" />
                {
                    !cartItems[id]
                    ? <img className='absolute top-2 right-2 cursor-pointer' onClick={()=> addToCart(id)} src={assets.add_icon_white} alt="Add Icon" />
                    : <div className="food-item-counter flex items-center justify-center absolute top-2 right-2 bg-white rounded-lg p-2">
                        <img onClick={()=> removeFromCart(id)} className="cursor-pointer mr-2" src={assets.remove_icon_red} alt="Remove Icon" />
                        <p className="mr-2">{cartItems[id]}</p>
                        <img onClick={()=> addToCart(id)} className="cursor-pointer" src={assets.add_icon_green} alt="Add Icon" />
                    </div>
                }
            </div>
            <div className="food-item-info mt-4 text-center">
                <div className="food-item-name-rating mb-2">
                    <p className="text-xl font-semibold">{name}</p>
                    <img className="mx-auto" src={assets.rating_starts} alt="Rating Stars" />
                </div>
                <p className="food-item-description text-gray-500 mb-2">
                    {description}
                </p>
                <p className="food-item-price text-lg font-bold text-tomato">
                    TK. {price}
                </p>
            </div>
        </div>
    ) 
}

export default FoodItem
