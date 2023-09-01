// Import SASS
import './hero.scss'

// Import Images
import HeroImg from "../../assets/svg/hero-right-img.svg"
import BgLeft from "../../assets/svg/bg-left.svg"
import BgRight from "../../assets/svg/bg-right.svg"

function Hero() {
    return (
        <section className='hero-section'>
            <div className="bg-effect"><img src={BgRight} alt="" /></div>
            <div className="container">
                <div className="hero-wrapper">
                    <div className="hero-left">

                        <div className="hero-left-info">
                            <h1 className='hero-left-info-h1'>Discover rare digital art and collect <span>NFTs</span></h1>
                        </div>

                        <div className="hero-left-desc">
                            <p className='hero-left-desc-p'>It is a long established fact that a reader will be distracted by the readable  content  of a page when looking </p>
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

                        <div className="hero-right-rating">
                            <div className="hero-right-rating-box">
                                <h3 className='hero-right-rating-h3'>50M+</h3>
                                <p className='hero-right-rating-p'>Artworks</p>
                            </div>

                            <div className="hero-right-rating-box">
                                <h3 className='hero-right-rating-h3'>120M+</h3>
                                <p className='hero-right-rating-p'>Auctions</p>
                            </div>

                            <div className="hero-right-rating-box">
                                <h3 className='hero-right-rating-h3'>10M+</h3>
                                <p className='hero-right-rating-p'>Artists</p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero