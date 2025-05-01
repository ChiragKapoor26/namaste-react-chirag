import MenuItems from "./MenuItems";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurant_menu from "./utils/useRestaurant_menu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const Restaurant_menu = () => {
    const { restid } = useParams();
    // Creating the custom hook for the fetching the data inside utils
    const resInfo = useRestaurant_menu(restid);
    // Creating the state variable for managing the accordian
    const [showIndex,setshowIndex] = useState(null);
    // Creating the state variable for the clicking functionality
    const [clicked,setclicked] = useState(false);
    if(resInfo===null) return <Shimmer/>;
    const cards = resInfo?.data?.cards || [];
    const restaurantInfoCard = cards.find(card => 
        card?.card?.card?.info !== undefined
      )?.card?.card?.info || {};
    const groupedCardData = cards.find(card => 
        card?.groupedCard?.cardGroupMap?.REGULAR?.cards !== undefined
      );
    // Extract all menu category cards
    let index = 2; 
    let {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const category = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
        c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(category);
    if(!itemCards){ resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.forEach((card, i) => {
        if(card.card.card.itemCards){
            index = i;
            console.log(i);
        }
        // else index = 2;
        // console.log(card.card.card.itemCards, i)
        });
        console.log("index: ", index);
    }
    const{name,costForTwoMessage,avgRatingString,locality,areaName} = resInfo?.data?.cards[2]?.card?.card?.info;
    // console.log(itemCards);
    // console.log(resInfo);
    return ( 
        <div className="menu flex w-[100%] flex-col items-center bg-[gainsboro] overflow-y-auto">
            <div className="part-res-cont w-[75%] flex flex-col justify-evenly items-center bg-[rgb(64,40,88)] text-white rounded-[2rem] mt-[2rem] pb-[2rem] border-[2px] border-solid border-black text-center">
                <h1 className="part-res-head text-[1.5rem] font-bold">{name}</h1>
                <div className="part-res-div flex flex-col justify-evenly h-[10rem] rounded-[1rem] mt-[1rem] w-[70%] bg-[#f4900c] text-black border-[2px] border-solid border-white ">
                    <h2 className="res-price text-xl font-bold">{costForTwoMessage}</h2>
                    <h2 className="rest-rating font-bold text-lg">Restaurant rating:-{avgRatingString}</h2>
                    <h2 className="res-address font-bold text-lg">Outlet:{(locality)||(areaName)}</h2>
                    <h3 className="res-delivery-time font-bold text-lg">40-45 minutes</h3>
                </div>
            </div>
            <h1 className="menu-title text-[rgb(64,40,88)] mt-[1rem] font-bold text-[1.6rem]">MENU</h1>
            <input className="menu-search w-[55%] rounded-[1rem] border-none outline-none flex justify-center px-[1.5rem] py-[0.25rem] mt-[1rem] bg-[rgb(192,186,186)] text-[1.1rem] text-left placeholder-black placeholder:text-center" placeholder="Search dishes from here"></input>
            <div className="filter-btn w-[65%] flex justify-evenly mt-[1rem] mb-[2rem]">
                <button className="veg-btn bg-[#976729] text-black border-none outline-none w-[15%] rounded-[2rem] cursor-pointer py-[1rem] text-xl font-semibold">Veg</button>
                <button className="all-btn bg-[#976729] text-black border-none outline-none w-[15%] rounded-[2rem] cursor-pointer py-[1rem] text-xl font-semibold">All</button>
                <button className="non-veg-btn bg-[#976729] text-black border-none outline-none w-[15%] rounded-[2rem] cursor-pointer py-[1rem] text-xl font-semibold">Non-Veg</button>
            </div>
            <div className="list-of-menu w-[75%] h-auto flex flex-col gap-4 px-[1rem] py-[1rem] mb-[2rem] flex-wrap border-[2px] border-solid border-black rounded-[1rem]">
                {
                    category.map((category,index) => <RestaurantCategory key = {category?.card?.card?.restid} 
                    data={category?.card?.card}
                    Menudata={(index === showIndex)&&clicked?true:false}
                    setshowIndex = {() => setshowIndex(index)}
                    setclicked = {() => setclicked(!clicked)}
                    />)
                }
            </div>
        </div>
    )
}
export default Restaurant_menu;