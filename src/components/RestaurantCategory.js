import { useState } from "react";
import MenuItems from "./MenuItems";
const RestaurantCategory = ( {data,Menudata,setshowIndex} ) => {
    // const [Menudata,setMenudata] = useState(false);
    const handleClick = () => {
        setshowIndex();
    }
    return (
        <div className="w-[100%]">
            {/* Creating the header for the accordion */}
            <div className="w-[100%] bg-[rgb(186,186,189)] text-black mx-auto my-3 shadow-lg py-2 px-10 rounded-3xl text-lg font-semibold">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span className="cursor-pointer">{"🔽"}</span>
                </div>

                { Menudata && <div className="flex flex-col justify-evenly gap-4 my-4">
                    {
                        data.itemCards.map((rest) =>(
                          <MenuItems data={rest} key={rest.card.info.id}/>
                        ))
                    }
                </div>}
            </div>
        </div>
    )
}
export default RestaurantCategory;