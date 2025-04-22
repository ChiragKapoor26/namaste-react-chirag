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
        <div className="body w-[100%] px-8 pt-1">
            <div className="search-container px-4 width-[100%] h-[5vh] flex items-center mb-1 gap-4">
                <input className="search-ip h-[100%] w-[20%] px-2 text-[1.1rem] border border-black rounded-lg" placeholder="Order from here..." value={Searchvalue} onChange={(e)=> {
                    setSearchvalue(e.target.value);
                }}></input>
                <button className="search-btn outline-none h-[100%] px-4 rounded-[0.4rem] border-none bg-[#ffa800] text-black text-[1.1rem] font-semibold py-1 flex justify-evenly items-center hover:cursor-pointer" onClick={()=> {
                    setfilteredRestaurant(listOfRestaurant.filter((res)=> res.info.name.toLowerCase().includes(Searchvalue.toLowerCase())));
                }}>Search</button>
                <button className="search-btn outline-none h-[100%] px-4 rounded-[0.4rem] border-none bg-[#ffa800] text-black text-[1.1rem] py-1 flex justify-evenly items-center hover:cursor-pointer font-semibold" onClick={() => {
                    setfilteredRestaurant(listOfRestaurant.filter((res)=>res.info.avgRating>4.3 ));
                }}>Top Rated Restaurant</button>
            </div>
            <div className="rest-container w-[100%] h-auto flex flex-wrap justify-evenly gap-y-8 mb-4 mt-3">
                {
                    
                    filteredRestaurant.map((restaurant) => (
                        <Link key={restaurant.info.id}to ={"/restaurant/"+restaurant.info.id} className="card h-[20rem] w-[23%] bg-[rgb(64,40,88)] rounded-[2rem] flex-col justify-evenly px-[0.5rem] py-[0.25rem] text-white cursor-pointer no-underline"><Card data={restaurant}/></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body;