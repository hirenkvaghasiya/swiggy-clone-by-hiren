import { site_logo } from "../assets/images";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo__container">
                    <img
                        src={site_logo}
                        className="logo"
                        alt="logo"
                    />
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/contact">CONTACT</Link>
                        </li>
                        <li>CART</li>
                        <li>SIGN IN</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;