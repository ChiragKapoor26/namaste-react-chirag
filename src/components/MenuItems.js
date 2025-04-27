const MenuItems = (props) => {
    const {name,description,imageId,price,finalPrice,defaultPrice} = props.data.card.info;
    if(imageId) return(
        <div className="menu-items w-[100%] min-h-[17rem] flex items-center bg-[rgb(64,40,88)] rounded-[1rem] px-4 border-black border-b-2">
            <div className="menu-items-text w-[70%] h-[100%] px-[1.5rem] flex flex-col justify-between py-[1rem]">
                <h3 className="menu-item-heading text-white text-lg font-bold">{name}</h3>
                <p className="menu-item-cost text-white font-extrabold text-lg">₹{(Math.round(price/100))||(Math.round(finalPrice/100))||Math.round(defaultPrice/100)}</p>
                <div className="menu-item-des border border-solid border-black p-[0.5rem] rounded-[0.5rem] bg-[#f4900c] text-black text-base font-semibold h-[70%] min-w-[80%]">
                    <p className="p-1  w-[100%] min-w-[80%] max-w-[100%]">{description || <p>Enjoy your our Special and delicious {name}</p>}</p>
                </div>
            </div>
            <div className="menu-item-photo w-[30%] h-[100%] flex items-center justify-start">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+imageId} className="menu-item-img w-[100%] h-[90%] rounded-[2rem] object-cover"></img>
            </div>
        </div>
    )
}
export default MenuItems;