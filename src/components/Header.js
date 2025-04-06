import chefimg from "../images/chef.svg"
const Header = () => {
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
                </ul>
            </div>
        </div>
    )
}
export default Header;