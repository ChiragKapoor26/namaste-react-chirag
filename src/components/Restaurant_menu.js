import {useEffect,useState} from "react"
import MenuItems from "./MenuItems";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Menu_API } from "./utils/constants";
const Restaurant_menu = () => {
    const [resInfo,setResInfo]= useState(null);
    useEffect(()=>{
        fetchData();
    },[]);
    const { restid } = useParams();
    const fetchData = async() => {
        const data = await fetch(Menu_API+restid);
        const jsonData = await data.json();
        setResInfo(jsonData);
    };
    if(resInfo===null) return <Shimmer/>;
    const {itemCards} = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const{name,costForTwoMessage,avgRatingString,locality,areaName} = resInfo?.data?.cards[2]?.card?.card?.info;
    console.log(itemCards);
    console.log(resInfo);
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