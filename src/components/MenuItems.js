const MenuItems = (props) => {
    const {name,description,imageId,price} = props.data.card.info;
    return(
        <div className="menu-items w-[100%] h-[17rem] flex items-center bg-[rgb(64,40,88)] rounded-[1rem]">
            <div className="menu-items-text w-[75%] h-[100%] px-[1.5rem] flex flex-col justify-evenly py-[1rem]">
                <h3 className="menu-item-heading text-white text-lg font-bold">{name}</h3>
                <p className="menu-item-cost text-white font-extrabold text-lg">₹{(Math.round(price/100))}</p>
                <p className="menu-item-des border border-solid border-black p-[0.5rem] rounded-[0.5rem] bg-[#f4900c] text-black text-base font-semibold">
                    {description}
                </p>
            </div>
            <div className="menu-item-photo w-[30%] h-[100%] flex items-center justify-start">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId} className="menu-item-img w-[85%] h-[90%] rounded-[2rem] object-cover"></img>
            </div>
        </div>
    )
}
export default MenuItems;