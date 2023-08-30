// Import SASS
import "./cards.scss"

// Import Images
import CardOneImg from "../../assets/svg/card-1.svg"
import CardTwoImg from "../../assets/svg/card-2.svg"
import CardThreeImg from "../../assets/svg/card-3.svg"
import CardUser from "../../assets/svg/card-user.svg"

function Cards() {

    return (
        <section className="cards-section">
            <div className="container">
                <div className="cards-start">
                    <h2 className="cards-start-h2">Choose your Favourites</h2>
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

                </div>
            </div>
        </section>
    )
}

export default Cards