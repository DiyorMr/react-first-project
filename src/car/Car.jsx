import React from 'react'
import './Car.css'
import rightIcon from '../img/Right2.svg'
import { carData } from './data'

export default function Car() {
  return (
    <div className="section">
      <div className="container">
        <div className="new">
          <h1 className="new-title">Caring is the new marketing</h1>
          <p className="new-text">The Nexcent blog is the best place to
            read about the latest membership insights, trends and more.
            See who's joining the community, read about how our community are increasing their membership income and lot's more.
          </p>

          <div className="cars-box">
            {
              carData.map((item, index) => (
                <div className="cars" key={index}>
                  <img src={item.img} />
                  <div className="cars-fath">
                    <p className="cars-title">{item.title}</p>
                    <h2 className="cars-text">{item.text.name} {item.text.id}
                      <img src={rightIcon} alt="right" />
                    </h2>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
