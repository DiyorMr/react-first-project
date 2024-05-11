import React from 'react'
import './Footer.css'
import nex from "../img/romb.svg"
import nex2 from "../img/apps.svg"

export default function Footer() {
  return (
    <div className="section3">
      <div className="container">
        <div className="footer-col">
          <div className="footer1">
            <div className="footer-logo">
              <img src={nex} />
              <h1 className="footer-title">Nexcent</h1>
            </div>
            <p className="footer-address">Copyright © 2020 Nexcent ltd.</p>
            <p className="footer-name">All rights reserved</p>
            <img className='nex-img' src={nex2}  />
          </div>
          <div className="footer2">
            <h2 className="footer2-title">Company</h2>
            <ul className='title-li'>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          <div className="footer2">
            <h2 className="footer2-title">Support</h2>
            <ul className='title-li'>
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer3">
            <h1 className="text-up">Stay up to date</h1>
            <input className='text-up-btn' type="text" placeholder='Your email address' />
          </div>
        </div>
      </div>
    </div>
  )
}
