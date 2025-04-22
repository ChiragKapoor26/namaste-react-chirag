import { CDN_LINK } from "./utils/constants";
const Card = (props) => {
    const {name,cloudinaryImageId,cuisines,avgRating} = props.data.info;
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
        </div>
    )
}
export default Card;