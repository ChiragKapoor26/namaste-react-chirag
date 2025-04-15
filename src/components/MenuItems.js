const MenuItems = (props) => {
    const {name,description,imageId,price} = props.data.card.info;
    return(
        <div className="menu-items">
            <div className="menu-items-text">
                <h3 className="menu-item-heading">{name}</h3>
                <p className="menu-item-cost">₹{(Math.round(price/100))}</p>
                <p className="menu-item-des">
                    {description}
                </p>
            </div>
            <div className="menu-item-photo">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId} className="menu-item-img"></img>
            </div>
        </div>
    )
}
export default MenuItems;