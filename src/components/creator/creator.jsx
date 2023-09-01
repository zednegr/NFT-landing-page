// Sass
import "./creator.scss"

// Images
import CreatorAvatar from "../../assets/svg/creator-avatar.svg"

function Creator() {

    return (
        <section className="creator-section">
            <div className="container">
                <div className="creator-wrapper">
                    <div className="creator-card">
                        <div className="creator-card-right">
                            <div className="creator-card-img">
                                <img src={CreatorAvatar} alt="Avatar" />
                            </div>

                            <div className="cretor-card-name">
                                <h4 className="creator-card-name-h4">Super Mario</h4>  
                                <p className="creator-card-name-p">12457</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Creator