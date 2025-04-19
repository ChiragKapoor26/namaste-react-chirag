import { useEffect,useState} from "react";
import { Menu_API } from "./constants";

const useRestaurant_menu = (restid) => {
    const [resInfo,setresInfo] = useState(null);
    //fetching the data using the useEffect
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() => {
        const data = await fetch(Menu_API+restid);
        const jsonData = await data.json();
        setresInfo(jsonData);
    }
    return resInfo;
}
export default useRestaurant_menu;