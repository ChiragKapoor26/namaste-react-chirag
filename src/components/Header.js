import chefimg from "../images/chef.svg"
import {useState} from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "./utils/useOnlineStatus";
const Header = () => {
    const [LoginButton,setLoginButton] = useState("Login");
    const onlinestatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img src={chefimg} className="logo-img"/>
                <p className="logo-name">Amrit Rasoi</p>
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li>Online Status:{onlinestatus?"✅":"🔴"}</li>
                    <li className="items"><Link to={"/"} className="link-items">HOME</Link></li>
                    <li className="items"><Link to={"/about"} className="link-items">ABOUT US</Link></li>
                    <li className="items"><Link to={"/contact"} className="link-items">CONTACT US</Link></li>
                    <li className="items">CART</li>
                    <button className="login" onClick={()=> {
                        LoginButton==="Login"?setLoginButton("Logout"):setLoginButton("Login")
                    }}>{LoginButton}</button>
                </ul>
            </div>
        </div>
    )
}
export default Header;