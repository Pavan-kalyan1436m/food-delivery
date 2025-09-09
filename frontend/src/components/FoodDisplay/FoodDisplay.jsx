import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
const FoodDisplay = ({ category }) => {

    const { food_list } = useContext(StoreContext);
    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className='food-item-list'>
                {
                    food_list.map((item, index) => {
                        if (category === "All" || category ===item.category) {
                            return (
                                <FoodItem key={item._id} id={item._id} name={item.name} image={item.image} price={item.price} description={item.description} category={item.category} />
                            )
                        }

                    })
                }
                {/* _id: "1",
                        name: "Greek salad",
                        image: food_1,
                        price: 12,
                        description: "Food provides essential nutrients for overall health and well-being",
                        category: "Salad" */}

            </div>
        </div>
    )
}

export default FoodDisplay