// Import SASS
import "./footer.scss"

// Images
import Logo from "../../assets/svg/NFT-logo.svg"
import In from "../../assets/svg/in.svg"

function Footer() {

    return (
        <section className="footer-section">
            <div className="container">
                <div className="footer-wrapper">
                    <div className="footer-box">
                        <img className="footer-logo" src={Logo} alt="Logo" />
                        <p className="footer-p">It is a long established fact that a reader will be of use</p>

                        <div className="footer-inp">
                            <input className="footer-input" type="text" placeholder="Enter email" />
                            <a className="footer-button">Subscribe</a>
                        </div>

                    </div>

                    <div className="footer-box">
                        <h4 className="footer-h4">Marketplace</h4>
                        <p className="footer-p">Explore</p>
                        <p className="footer-p">All Nft</p>
                        <p className="footer-p">Collections</p>
                        <p className="footer-p">Author Profile</p>
                        <p className="footer-p">Create Collection</p>
                    </div>

                    <div className="footer-box">
                        <h4 className="footer-h4">Marketplace</h4>
                        <p className="footer-p">Explore</p>
                        <p className="footer-p">All Nft</p>
                        <p className="footer-p">Collections</p>
                        <p className="footer-p">Author Profile</p>
                        <p className="footer-p">Create Collection</p>
                    </div>

                    <div className="footer-box">
                        <h4 className="footer-h4">Marketplace</h4>
                        <p className="footer-p">Explore</p>
                        <p className="footer-p">All Nft</p>
                        <p className="footer-p">Collections</p>
                        <p className="footer-p">Author Profile</p>
                        <p className="footer-p">Create Collection</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer