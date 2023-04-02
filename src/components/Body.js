import { useState } from 'react';

import resData from '../utils/restaurantData';
import RestaurantCard from './RestaurantCard';

const Body = () => {

    const [restaurantsData, setRestaurantsData] = useState(resData);

    return (
        <main className="main__content">
            <div className="filter__container">
                <div className="filter__row">
                    <button
                        className="filter__btn"
                        onClick={() => {
                            setRestaurantsData(resData);
                        }}
                    >
                        Relevance
                    </button>

                    <button
                        className="filter__btn"
                        onClick={() => {
                            const filteredData = restaurantsData.filter(
                                (res) => res.data.avgRating > 4
                            )
                            setRestaurantsData(filteredData);
                        }}
                    >
                        Top Rated Restaurant
                    </button>
                </div>
                <input type="text" className="search" placeholder="Search" />
            </div>
            <div className="res__container res__card__container">
                {
                    restaurantsData.map((restaurant) => <RestaurantCard key={restaurant.data.id} restData={restaurant} />)
                }
            </div>
        </main>
    );
};

export default Body;