import restaurantData from '../utils/restaurantData';
import RestaurantCard from './RestaurantCard';

const Body = () => {
    return (
        <main className="main__content">
            <div className="filter__container">
                <div className="filter__row">
                    <button
                        className="filter__btn"
                        onClick={() => {
                            console.log("Filter");
                        }}
                    >
                        Relevance
                    </button>

                    <button
                        className="filter__btn"
                        onClick={() => {
                            console.log("Filter");
                        }}
                    >
                        Top Rated Restaurant
                    </button>

                    <button
                        className="filter__btn"
                        onClick={() => {
                            console.log("Filter");
                        }}
                    >
                        Fast Delivery Time
                    </button>
                </div>
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