import { useEffect, useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Shimmer from './Shimmer';
import { API_URL } from '../utils/constant';
import { Link } from 'react-router-dom';

function filterData(searchText, allRestaurants) {
    const filterData = allRestaurants.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        setSearchText("");
        getRestaurants();
    }, []);

    async function getRestaurants() {
        const data = await fetch(API_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    if (!allRestaurants) return null;

    return (
        <main className="main__content">
            <div className="filter__container">
                <div className="filter__row">
                    <button
                        className="filter__btn"
                        onClick={() => console.log("Relevance")}
                    >
                        Relevance
                    </button>

                    <button
                        className="filter__btn"
                        onClick={() => console.log("Top Rated Restaurant")}
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
                        const data = filterData(searchText, allRestaurants);
                        e.target.value === "" ? setFilteredRestaurants(allRestaurants) : setFilteredRestaurants(data);
                    }}
                />
            </div>

            {
                allRestaurants?.length === 0 ? (
                    <div className="shimmer__container">
                        <Shimmer image={true} cards={15} lines={3} width={260} />
                    </div>
                ) : (
                    <div className="res__container res__card__container">
                        {
                            filteredRestaurants?.length === 0 ? <h2 className='nores__error'>No Restaurant Found, Search Other Restaurant 🤗</h2>
                                :
                                filteredRestaurants?.map((restaurant) => {
                                    return <Link to={"/restaurant/" + restaurant.data.id} key={restaurant.data.id}><RestaurantCard {...restaurant.data} /></Link>
                                })
                        }
                    </div>
                )
            }
        </main>
    );
};

export default Body;