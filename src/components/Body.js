import { useEffect, useState } from "react";
import Card from "./Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurant,setlistOfRestaurant] = useState([]);
    const [filteredRestaurant,setfilteredRestaurant] = useState([]);
    useEffect(()=> {
        fetchData();
    },[]);
    const [Searchvalue,setSearchvalue] = useState("");
    // Creating the function for fetching the data from the api
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3316609&lng=75.6193539&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setlistOfRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // The Below Concept is known as Conditional Rendering
    // if(listOfRestaurant.length === 0) {
    //     return(<Shimmer/>)
    // }
    const useonlinestatus = useOnlineStatus();
    if(useonlinestatus === false) return <h1>Looks like you are Offline . Please Check your Internet Connection</h1>
    return listOfRestaurant.length===0?<Shimmer/>: (
        <div className="body">
            <div className="search-container">
                <input className="search-ip" placeholder="Order from here..." value={Searchvalue} onChange={(e)=> {
                    setSearchvalue(e.target.value);
                }}></input>
                <button className="search-btn" onClick={()=> {
                    setfilteredRestaurant(listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(Searchvalue.toLowerCase())));
                }}>Search</button>
                <button className="search-btn" onClick={() => {
                    setfilteredRestaurant(listOfRestaurant.filter((res)=>res.info.avgRating>4.3 ));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container">
                {
                    
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id}to ={"/restaurant/"+restaurant.info.id} className="card"><Card data={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;