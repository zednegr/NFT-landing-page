// Import SASS
import "./navbar.scss"

// Import Images
import Logo from "../../assets/svg/NFT-logo.svg"
import Search from "../../assets/svg/search-normal.svg"

function Navbar() {
    
    return (
        <section className="navbar-secrtion">
            <div className="container">
                <div className="navbar-wrapper">
                    <div className="navbar-left">
                        <div className="navbar-logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                    </div>

                    <div className="navbar-center">
                        <ul className="navbar-list">
                            <li className="navbar-item">
                                <a href="#">Home</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#">Marketplace</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#">Auction</a>
                            </li>
                            <li className="navbar-item">
                                <a href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>

                    <div className="navbar-right">
                        <div className="navbar-search">
                            <img className="navbar-search-icon" src={Search} alt="Icon" />
                        </div>

                        <div className="navbar-button">
                            <a className="navbar_btn">Connect Wallet</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar