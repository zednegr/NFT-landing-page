// Import SASS
import "./market.scss"

// Import Images
import CardOneImg from "../../assets/svg/card-2.svg"
import CardUser from "../../assets/svg/card-user.svg"

function Market() {

    return (
        <section className="market-section">
            <div className="container">

                <div className="market-start">
                    <h2 className="market-start-h2">Explore the Nft Marketplace</h2>
                </div>

                <div className="market-start-buttons">
                    <a className="market-start-btn">Newest Items</a>
                    <a className="market-start-btn">Latest Sales</a>
                    <a className="market-start-btn">Latest Listings</a>
                    <a className="market-start-btn">Parel & States </a>
                </div>

                <div className="cards-wrapper">
                    <div className="card">
                        <div className="card-top">
                            <img src={CardOneImg} alt="Image" />
                        </div>

                        <div className="card-middle">
                            <div className="card-middle-name">
                                <h4 className="card-middle-name-h4">“Baby Industry  #69”</h4>
                            </div>

                            <div className="card-middle-user">
                                <img className="card-middle-user-img" src={CardUser} alt="icon" />
                                <p className="card-middle-user-p">@Crazy Ape</p>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="card-bottom-btns">
                                <a className="card-bottom-btn-one">Place a bid</a>
                                <a className="card-bottom-btn-two">Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-top">
                            <img src={CardOneImg} alt="Image" />
                        </div>

                        <div className="card-middle">
                            <div className="card-middle-name">
                                <h4 className="card-middle-name-h4">“Baby Industry  #69”</h4>
                            </div>

                            <div className="card-middle-user">
                                <img className="card-middle-user-img" src={CardUser} alt="icon" />
                                <p className="card-middle-user-p">@Crazy Ape</p>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="card-bottom-btns">
                                <a className="card-bottom-btn-one">Place a bid</a>
                                <a className="card-bottom-btn-two">Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-top">
                            <img src={CardOneImg} alt="Image" />
                        </div>

                        <div className="card-middle">
                            <div className="card-middle-name">
                                <h4 className="card-middle-name-h4">“Baby Industry  #69”</h4>
                            </div>

                            <div className="card-middle-user">
                                <img className="card-middle-user-img" src={CardUser} alt="icon" />
                                <p className="card-middle-user-p">@Crazy Ape</p>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="card-bottom-btns">
                                <a className="card-bottom-btn-one">Place a bid</a>
                                <a className="card-bottom-btn-two">Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-top">
                            <img src={CardOneImg} alt="Image" />
                        </div>

                        <div className="card-middle">
                            <div className="card-middle-name">
                                <h4 className="card-middle-name-h4">“Baby Industry  #69”</h4>
                            </div>

                            <div className="card-middle-user">
                                <img className="card-middle-user-img" src={CardUser} alt="icon" />
                                <p className="card-middle-user-p">@Crazy Ape</p>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="card-bottom-btns">
                                <a className="card-bottom-btn-one">Place a bid</a>
                                <a className="card-bottom-btn-two">Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-top">
                            <img src={CardOneImg} alt="Image" />
                        </div>

                        <div className="card-middle">
                            <div className="card-middle-name">
                                <h4 className="card-middle-name-h4">“Baby Industry  #69”</h4>
                            </div>

                            <div className="card-middle-user">
                                <img className="card-middle-user-img" src={CardUser} alt="icon" />
                                <p className="card-middle-user-p">@Crazy Ape</p>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="card-bottom-btns">
                                <a className="card-bottom-btn-one">Place a bid</a>
                                <a className="card-bottom-btn-two">Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-top">
                            <img src={CardOneImg} alt="Image" />
                        </div>

                        <div className="card-middle">
                            <div className="card-middle-name">
                                <h4 className="card-middle-name-h4">“Baby Industry  #69”</h4>
                            </div>

                            <div className="card-middle-user">
                                <img className="card-middle-user-img" src={CardUser} alt="icon" />
                                <p className="card-middle-user-p">@Crazy Ape</p>
                            </div>
                        </div>

                        <div className="card-bottom">
                            <div className="card-bottom-btns">
                                <a className="card-bottom-btn-one">Place a bid</a>
                                <a className="card-bottom-btn-two">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Market