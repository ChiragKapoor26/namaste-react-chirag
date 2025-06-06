import { CDN_LINK } from "./utils/constants";
import userContext from "./utils/userContext";
import { useContext } from "react";
const Card = (props) => {
    const {name,cloudinaryImageId,cuisines,avgRating} = props.data.info;
    const data = useContext(userContext);
    const {loginUser} = data;
    return (
        <div className="incard h-[100%] w-[100%] px-[0.5rem] flex-col justify-evenly flex">
            <div className="res-name w-[100%] flex justify-center items-center text-xl font-bold text-center">
                <h2 className="nameOfrest h-[100%] w-[100%]">{name}</h2>
            </div>
            <div className="res-img h-[45%] w-[100%] px-[1rem]">
                <img src={CDN_LINK+cloudinaryImageId} className="res-photo w-[100%] h-[100%] rounded-[1rem] object-cover"/>
            </div>
            <div className="res-cuisine w-[100%] h-[15%]flex justify-center items-center text-[1em] text-center">
                <p className="cuisineOfrest">{cuisines.join(", ")}</p>
            </div>
            <div className="res-rating h-[10%] w-[100%] flex justify-center items-center text-[1em] font-[600] text-center">
                <p className="ratingOfrest">{avgRating} Stars</p>
            </div>
            <h4 className="text-bold text-center">{loginUser}</h4>
        </div>
    )
}
// Creating a Higher Order Component with the name of withPromotedLabel
export const withPromotedLabel = (Card) => {
    return (props) => {
        return(
            <div>
                <Label className="bg-black text-white">Promoted</Label>
                <Card {...props}/>
            </div>
        )
    }
}
export default Card;