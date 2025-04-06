import { CDN_LINK } from "./utils/constants";
const Card = (props) => {
    const {name,cloudinaryImageId,cuisines,avgRating} = props.data.info;
    return (
        <div className="card">
            <div className="res-name">
                <h2>{name}</h2>
            </div>
            <div className="res-img">
                <img src={CDN_LINK+cloudinaryImageId}className="res-photo"/>
            </div>
            <div className="res-cuisine">
                <p>{cuisines.join(", ")}</p>
            </div>
            <div className="res-rating">
                <p>{avgRating} Stars</p>
            </div>
        </div>
    )
}
export default Card;