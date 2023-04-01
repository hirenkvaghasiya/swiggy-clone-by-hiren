import restaurantData from '../utils/restaurantData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
    return (
        <main className="main__content">
            <div className="filter__container">
                <button
                    className="filter__toprated__btn"
                    onClick={() => {
                        console.log("Filter");
                    }}
                >
                    Top Rated Restaurant
                </button>
                <input type="text" className="search" placeholder="Search" />
            </div>
            <div className="res__container res__card__container">
                {
                    restaurantData.map((restaurant) => <RestaurantCard key={restaurant.data.id} restData={restaurant} />)
                }
            </div>
        </main>
    );
};

export default Body;