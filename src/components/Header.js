import chefimg from "../images/chef.svg"
import {useState} from "react";
const Header = () => {
    const [LoginButton,setLoginButton] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img src={chefimg} className="logo-img"/>
                <p className="logo-name">Amrit Rasoi</p>
            </div>
            <div className="nav-items">
                <ul className="nav-list">
                    <li className="items">HOME</li>
                    <li className="items">ABOUT US</li>
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