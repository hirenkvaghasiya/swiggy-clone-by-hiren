import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const param = useParams();
    const { resId } = param;

    const [menuData, setMenuData] = useState([]);

    useEffect(() => {
        getResturantMenu();
    }, []);

    async function getResturantMenu() {
        const data = await fetch(MENU_API_URL + resId)
        const json = await data.json();
        console.log(json.data.cards[0].card.card);
        setMenuData(json.data.cards[0].card.card.info);
    }

    return (
        <main className="main__content container">
            <br />
            {
                menuData.length === 0 ? <Shimmer image={false} cards={1} lines={1} width={700} /> : <h1>Restaurant - {menuData.name}</h1>
            }
        </main>
    )
}

export default RestaurantMenu