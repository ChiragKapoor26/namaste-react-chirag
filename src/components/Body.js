import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    useEffect(()=> {
        fetchData();
    },[])
    // Creating the function for fetching the data from the api
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3316609&lng=75.6193539&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setlistOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // The Below Concept is known as Conditional Rendering
    // if(listOfRestaurant.length === 0) {
    //     return(<Shimmer/>)
    // }
    return listOfRestaurant.length===0?<Shimmer/>: (
        <div className="body">
            <div className="search-container">
                <input className="search-ip" placeholder="Order from here..."></input>
                <button className="search-btn" onClick={() => {
                    setlistOfRestaurant(listOfRestaurant.filter((res)=>res.info.avgRating>4.3 ));
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