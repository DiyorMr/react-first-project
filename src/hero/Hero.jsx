import logo from "../img/Illustration.svg"
import './Hero.css'


const Hero = () => {
    return (
        <div className="section2">
            <div className="container">
                <div className="hero">
                    <div className="hero-left">
                        <h1 className='hero-title'>Lessons and insights </h1>
                        <p className="hero-title2" >from 8 years</p>
                        <p className='hero-text'>Where to grow your business as a photographer: site or social media?</p>
                        <button className='hero-btn'>
                            <a href='#'>Register</a>
                        </button>
                    </div>
                    <div className="hero-right">
                        <img src={logo} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero   