import chefimg from "../images/chef.svg"
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () => {
    const [LoginButton,setLoginButton] = useState("Login");
    const onlinestatus = useOnlineStatus();
    return (
        <div className="header flex justify-between px-8 items-center h-[10vh] w-[100%] py-1 text-white bg-[rgb(109,66,141)]">
            <div className="logo-container flex gap-4 items-center">
                <img src={chefimg} className="logo-img h-[3rem] w-[3rem]"/>
                <p className="logo-name text-2xl font-semibold text-[rgb(223,223,32)]">Amrit Rasoi</p>
            </div>
            <div className="nav-items">
                <ul className="nav-list list-none flex gap-8 items-center">
                    <li className="font-extrabold tracking-[2%] cursor-pointer text-[1.2rem] font-lucida transition-all duration-200 ease-in hover:text-[rgb(223,223,32)]">Online Status:{onlinestatus?"✅":"🔴"}</li>
                    <li className="font-extrabold tracking-[2%] cursor-pointer text-[1.2rem] font-lucida transition-all duration-200 ease-in hover:text-[rgb(223,223,32)]"><Link to={"/"} className="link-items no-underline text-white font-extrabold font-lucida tracking-[2%] transition-all duartion-200 ease-in hover:text-[rgb(223,223,32)]">HOME</Link></li>
                    <li className="font-extrabold tracking-[2%] cursor-pointer text-[1.2rem] font-lucida transition-all duration-200 ease-in hover:text-[rgb(223,223,32)]"><Link to={"/about"} className="link-items no-underline text-white font-extrabold font-lucida tracking-[2%] transition-all duartion-200 ease-in hover:text-[rgb(223,223,32)]">ABOUT US</Link></li>
                    <li className="font-extrabold tracking-[2%] cursor-pointer text-[1.2rem] font-lucida transition-all duration-200 ease-in hover:text-[rgb(223,223,32)]"><Link to={"/contact"} className="link-items no-underline text-white font-extrabold font-lucida tracking-[2%] transition-all duartion-200 ease-in hover:text-[rgb(223,223,32)]">CONTACT US</Link></li>
                    <li className="font-extrabold tracking-[2%] cursor-pointer text-[1.2rem] font-lucida transition-all duration-200 ease-in hover:text-[rgb(223,223,32)]">CART</li>
                    <button className="login outline-none h-[100%] px-[0.5rem] py-[0.25rem] rounded-[0.4rem] border-none bg-[#ffa800] text-[black] text-[1.1rem] font-[600] flex justify-center items-center cursor-pointer" onClick={()=> {
                        LoginButton==="Login"?setLoginButton("Logout"):setLoginButton("Login")
                    }}>{LoginButton}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;