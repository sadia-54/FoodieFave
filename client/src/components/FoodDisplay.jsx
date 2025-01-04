import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import FoodItem from './FoodItem'

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext)

    return (
        <div className="food-display mt-8">
            <h2 className="text-tomato text-3xl font-semibold">Top Dishes Near You!</h2>
            <div className="food-display-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {food_list.map((item, index) => {
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
