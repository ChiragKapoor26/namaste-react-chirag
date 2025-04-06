import { useState } from "react";
import Card from "./Card"
import {restData} from "./utils/mock-data";
const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <input className="search-ip" placeholder="Order from here..."></input>
                <button className="search-btn" onClick={() => {
                    const resList = restData.card.card.gridElements.infoWithStyle.restaurants;
                    resList = resList.filter((rest) => {
                        return
                        (rest>4.2)
                    })
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {
                    restData.card.card.gridElements.infoWithStyle.restaurants.map((restaurant) => (
                        <Card data={restaurant} key={restaurant.info.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;