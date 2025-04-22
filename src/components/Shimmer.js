import Body from "./Body";
const Shimmer = () => {
    return(
        <div className="body">
            <div className="search-container px-4 width-[100%] h-[5vh] flex items-center mb-1 gap-4 mt-[0.25rem]">
                <input className="search-ip search-ip h-[100%] w-[20%] px-2 text-[1.1rem] border border-black rounded-lg" placeholder="Order from here..."></input>
                <button className="search-btn outline-none h-[100%] px-4 rounded-[0.4rem] border-none bg-[#ffa800] text-black text-[1.1rem] font-semibold py-1 flex justify-evenly items-center hover:cursor-pointer">Search</button>
                <button className="search-btn outline-none h-[100%] px-4 rounded-[0.4rem] border-none bg-[#ffa800] text-black text-[1.1rem] py-1 flex justify-evenly items-center hover:cursor-pointer font-semibold">Top Rated Restaurant</button>
            </div>
            <div className="shimmer-container flex flex-wrap w-[100%] h-auto justify-evenly gap-y-8 mb-4 mt-3">
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
                <div className="shimmer-cards h-[20rem] w-[23%] bg-[#cfcccc] rounded-[2rem] flex justify-center items-center overflow-hidden px-[0.5rem]"></div>
            </div>
        </div>
    )
}
export default Shimmer;