import { useState } from "react";
import Card from "./Card"
import {restData} from "./utils/mock-data";
const Body = () => {
    const [listOfRestaurant,setlistOfRestaurant] = useState(restData.card.card.gridElements.infoWithStyle.restaurants);
    // let listOfRestaurantJS = [
    //     {
    //         "info": {
    //         "id": "234875",
    //         "name": "Adil Hotel",
    //         "cloudinaryImageId": "gp1ityra6utvzqn6ghnv",
    //         "locality": "Rautha Wada",
    //         "areaName": "Chhindwara Locality",
    //         "costForTwo": "₹150 for two",
    //         "cuisines": [
    //         "North Indian",
    //         "Biryani",
    //         "Tandoor"
    //         ],
    //         "avgRating": 4.3,
    //         }
    //         },
    //     {
    //             "info": {
    //             "id": "150591",
    //             "name": "Satkar Restaurant",
    //             "cloudinaryImageId": "rvxp5xbniat84r6efku2",
    //             "locality": "Sinchai Colony",
    //             "areaName": "Satkar Chowk",
    //             "costForTwo": "₹250 for two",
    //             "cuisines": [
    //             "North Indian",
    //             "South Indian",
    //             "Indian",
    //             "Salads",
    //             "Desserts"
    //             ],
    //             "avgRating": 4.4,
    //             }
    //         },
    //     {
    //             "info": {
    //             "id": "151649",
    //             "name": "Hotel Sai Nath & Sai Restaurant",
    //             "cloudinaryImageId": "vkhcohhmqfczycw9vsar",
    //             "locality": "railway station",
    //             "areaName": "Chhindwara Locality",
    //             "costForTwo": "₹200 for two",
    //             "cuisines": [
    //             "North Indian",
    //             "South Indian",
    //             "Chinese",
    //             "Beverages",
    //             "Fast Food",
    //             "Desserts"
    //             ],
    //             "avgRating": 4.3,
    //             }
    //         }
    // ]
    return (
        <div className="body">
            <div className="search-container">
                <input className="search-ip" placeholder="Order from here..."></input>
                <button className="search-btn" onClick={() => {
                    setlistOfRestaurant(listOfRestaurant.filter((res)=>res.info.avgRating>4.1 ));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <Card data={restaurant} key={restaurant.info.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;