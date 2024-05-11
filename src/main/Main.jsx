import React from 'react'
import './Main.css'
import logo1 from "../img/our-img1.svg"
import logo2 from "../img/our-img2.svg"
import logo3 from "../img/our-img3.svg"
import logo4 from "../img/our-img4.svg"
import logo5 from "../img/our-img5.svg"
import logo6 from "../img/our-img6.svg"
import logo7 from "../img/our-img7.svg"

export default function Main() {
    return (
        <div className="section">
            <div className="container">
                <div className="our-top">
                    <h1 className='our-title'>Our Clients</h1>
                    <p className='our-text'>We have been working with some Fortune 500+ clients</p>
                </div>
                <div className="our-btm">
                    <img className='our-img' src={logo1} />
                    <img className='our-img' src={logo2} />
                    <img className='our-img' src={logo3} />
                    <img className='our-img' src={logo4} />
                    <img className='our-img' src={logo5} />
                    <img className='our-img' src={logo6} />
                    <img className='our-img' src={logo7} />
                </div>
            </div>
        </div>
    )
}
