import React from 'react'
import './Demo.css'
import rightIcon from '../img/Right.svg'

export default function Demo() {
    return (
        <div className='section2 demo'>
            <div className="container demo-box">
                <h1 className="demo-title">
                    Pellentesque suscipit fringilla libero eu.
                </h1>
                <button className="demo-btn">
                    Get a Demo 
                    <img src={rightIcon} alt="right" />
                </button>
            </div>
        </div>
    )
}
