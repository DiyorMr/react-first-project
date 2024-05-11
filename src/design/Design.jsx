import React from 'react'
import './Design.css'
import Art2 from "../img/art-img2.svg"

export default function Design() {
    return (
        <div className="navbar">
            <div className="container">
                <div className="design">
                    <div className="design-left">
                        <img src={Art2} />
                    </div>
                    <div className="design-right">
                        <h1 className="design-title">How to design your site footer like we did</h1>
                        <p className="design-text">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className="design-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
