import logo from "../img/Logo.svg"
import './Navbar.css'
import { menuData } from "./data";

const Navbar = () => {
    return (
        <div className="section2">
            <div className="container">
                <div className="navbar-menu">
                    <div className="navbar-left">
                        <img src={logo}></img>

                    </div>
                    <div className="navbar-center">
                        <ul>
                            {
                                menuData.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link}>{item.name}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="navbar-right">
                        <button className="navbar-btn">
                            <a href="#">Login</a>
                        </button>
                        <button className="navbar-btn-2">
                            <a href="#">Sign up</a>
                        </button>
                    </div>


                </div>
            </div>
        </div>

    )
}
export default Navbar

