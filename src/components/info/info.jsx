// Import SASS
import "./info.scss"

// Import Images
import Notification from "../../assets/svg/notification.svg"
import BitCoin from "../../assets/svg/bitcoin.svg"
import Menu from "../../assets/svg/menu.svg"

function Info() {

    return (
        <section className="info-section">
            <div className="container">
                <div className="info-start">
                    <h2 className="info-start-h2">Create and sell your NFTs</h2>
                </div>
                <div className="info-wrapper">
                    <div className="info">
                        <div className="info-box">
                            <img src={Notification} alt="Icon" width={64} height={64} />
                            <h4 className="info-box-h4">Create collection</h4>
                            <p className="info-box-p">It is a long established fact that a will be distracted by the readable of a page . </p>
                        </div>

                        <div className="info-box">
                            <img src={BitCoin} alt="Icon" width={64} height={64} />
                            <h4 className="info-box-h4">Add your NFTs</h4>
                            <p className="info-box-p">There are many variations of passages of Lorem Ipsum available, but the majority </p>
                        </div>

                        <div className="info-box">
                            <img src={Menu} alt="Icon" width={64} height={64} />
                            <h4 className="info-box-h4">List them for sale</h4>
                            <p className="info-box-p">The If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Info