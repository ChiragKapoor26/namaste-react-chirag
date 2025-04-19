import MenuItems from "./MenuItems";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurant_menu from "./utils/useRestaurant_menu";
const Restaurant_menu = () => {
    const { restid } = useParams();
    // Creating the custom hook for the fetching the data inside utils
    const resInfo = useRestaurant_menu(restid);
    if(resInfo===null) return <Shimmer/>;
    let index = 2; 
    let {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[index]?.card?.card;
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
    itemCards = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[index]?.card?.card?.itemCards;
    
   
    const{name,costForTwoMessage,avgRatingString,locality,areaName} = resInfo?.data?.cards[index]?.card?.card?.info;
    // console.log(itemCards);
    // console.log(resInfo);
    return ( 
        <div className="menu">
            <div className="part-res-cont">
                <h1 className="part-res-head">{name}</h1>
                <div className="part-res-div">
                    <h2 className="res-price">{costForTwoMessage}</h2>
                    <h2 className="rest-rating">Restaurant rating:-{avgRatingString}</h2>
                    <h2 className="res-address">Outlet:{(locality)||(areaName)}</h2>
                    <h3 className="res-delivery-time">40-45 minutes</h3>
                </div>
            </div>
            <h1 className="menu-title">MENU</h1>
            <input className="menu-search" placeholder="Search dishes from here"></input>
            <div className="filter-btn">
                <button className="veg-btn">Veg</button>
                <button className="all-btn">All</button>
                <button className="non-veg-btn">Non-Veg</button>
            </div>
            <div className="list-of-menu">
                {
                    itemCards.map((rest)=>(
                        <MenuItems data={rest} key={rest.card.info.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Restaurant_menu;