import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)

    return (
        <div className="food-display mt-[30px]">
            <h2 className="text-[max(2vw,24px)] font-semibold text-[tomato]">Top Dishes Near You!</h2>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] mt-8 gap-x-7 gap-y-12">
                {food_list?.map((item, index) => {
                    if (category === 'All' || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export default FoodDisplay
