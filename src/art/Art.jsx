import React from 'react'
import './Art.css'
import art from '../img/art-img.svg'

export default function Art() {
    return (
        <div className="section">
            <div className="container">
                <div className="art">
                    <div className="art-left">
                        <img className='art-icon' src={art} />
                    </div>
                    <div className="art-right">
                        <h1 className="art-title">The unseen of spending three years at Pixelgrade</h1>
                        <p className="art-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                        <button className="art-btn">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
