import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';

function filterData(searchText, restaurantsData) {
    const filterData = restaurantsData.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {

    const [restaurantsData, setRestaurantsData] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurantsData(json?.data?.cards[2]?.data?.data?.cards);
    }

    return (
        <main className="main__content">
            <div className="filter__container">
                <div className="filter__row">
                    <button
                        className="filter__btn"
                        onClick={() => {
                            getRestaurants();
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
                <input
                    type="text"
                    className="search"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        const data = filterData(searchText, restaurantsData);
                        setRestaurantsData(data);
                    }}
                />
            </div>

            {
                restaurantsData.length === 0 ? (
                    <div className="shimmer__container">
                        <Shimmer image={true} cards={8} lines={3} />
                    </div>
                ) : (
                    <div className="res__container res__card__container">
                        {
                            restaurantsData?.map((restaurant) => {
                                return <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
                            })
                        }
                    </div>
                )
            }
        </main>
    );
};

export default Body;