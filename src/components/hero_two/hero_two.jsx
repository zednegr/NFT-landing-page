// Import SASS
import "./hero_two.scss"

// Images
import HeroImg from "../../assets/svg/heroTwo.svg"

function HeroTwo() {

    return (
        <section className="heroTwo-section">
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-left">

                        <div className="hero-left-info">
                            <h1 className='hero-left-info-h1'>Get More Beautiful <span>Artwork</span> Here</h1>
                        </div>

                        <div className="hero-left-desc">
                            <p className='hero-left-desc-p'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true </p>
                        </div>

                        <div className="hero-left-btns">
                            <a className='hero-left-btn-one'>Explore More</a>
                            <a className='hero-left-btn-two'>Create</a>
                        </div>
                    </div>

                    <div className="hero-right">
                        <div className="hero-right-imgs">
                            <img src={HeroImg} alt="Images" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroTwo