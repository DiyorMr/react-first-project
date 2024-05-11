import React from 'react'
import './Local.css'
import local from '../img/local-img.svg'
import local2 from '../img/local-img2.svg'
import local3 from '../img/local-img3.svg'
import local4 from '../img/local-img4.svg'

export default function Local() {
    return (
        <div className="section2">
            <div className="container">
                <div className="local">
                    <div className="local-left">
                        <h2 className="local-title">
                            Helping a local
                        </h2>
                        <h2 className='local-title2'>business reinvent itself</h2>
                        <p className="local-text">
                            We reached here with our hard work and dedication
                        </p>
                    </div>
                    <div className="local-right">
                        <div className="local-icons-left">
                            <div className="local-imgs">
                                <img className='localImg' src={local} />
                                <h2 className="locals-number">2,245,341</h2>
                            </div>
                            <p className="locals-text">Members</p>
                            <div className="local-imgs">
                                <img className='localImg' src={local3} />
                                <h2 className="locals-number">828,867</h2>
                            </div>
                            <p className="locals-text">Event Bookings</p>
                        </div>
                        <div className="local-icons-left">
                            <div className="local-imgs">
                                <img className='localImg' src={local3} />
                                <h2 className="locals-number">46,328</h2>
                            </div>
                            <p className="locals-text">Clubs</p>

                            <div className="local-imgs">
                                <img className='localImg' src={local4} />
                                <h2 className="locals-number">1,926,436</h2>
                            </div>
                            <p className="locals-text">Payments</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
