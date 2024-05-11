import React from 'react'
import './Tesla.css'
import tesla from "../img/tesla.svg"
import ticon from "../img/our-img1.svg"
import ticon2 from "../img/our-img2.svg"
import ticon3 from "../img/our-img3.svg"
import ticon4 from "../img/our-img4.svg"
import ticon5 from "../img/our-img5.svg"
import ticon6 from "../img/our-img6.svg"
import rightIcon from '../img/Right2.svg'


export default function Tesla() {
    return (
        <div className="section2">
            <div className="container">
                <div className="tesla">
                    <div className="tesla-left">
                        <img src={tesla} />
                    </div>
                    <div className="tesla-right">
                        <p className="tesla-text">
                            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
                        </p>
                        <h1 className="tesla-name">Tim Smith</h1>
                        <h5 className="tesla-title">British Dragon Boat Racing Association</h5>
                        <div className="tesla-footer">
                            <div className="tesla-col">
                                <img className='tesla-icon-img' src={ticon} />
                                <img src={ticon2} />
                                <img src={ticon3} />
                                <img src={ticon4} />
                                <img src={ticon5} />
                                <img src={ticon6} />
                            </div>
                            <h3 className="tesla-all">
                                Meet all customers
                                <img  src={rightIcon} alt="right" />
                            </h3>
                        </div>


                    </div>

                </div>
            </div>
        </div>
    )
}
