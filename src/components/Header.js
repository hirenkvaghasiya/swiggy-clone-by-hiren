import { LOGO_URL } from "../utils/constant";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="logo__container">
                    <img
                        src={LOGO_URL}
                        className="logo"
                        alt="logo"
                    />
                </div>
                <nav className="nav">
                    <ul>
                        <li>HOME</li>
                        <li>OFFERS</li>
                        <li>HELP</li>
                        <li>SIGN IN</li>
                        <li>CART</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;