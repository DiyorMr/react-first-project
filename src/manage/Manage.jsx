import React from 'react'
import './Manage.css'
import { manageData } from './data'

export default function Manage() {
  console.log(manageData);
  return (
    <div className="section">
      <div className="container">
        <h1 className='manage-title'>Manage your entire community in a single system</h1>
        <p className='manage-text'>Who is Nextcent suitable for?</p>
        <div className="box-icons">
          {
            manageData.map((item, index) => (
              <div className="box" key={index}>
                <img className='box-icon' src={item.img}></img>
                <h1 className='box-title'>{item.title}</h1>
                <p className='box-text'>{item.text}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
