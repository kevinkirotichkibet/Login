import React from 'react'
import './header.css'

import MyLogo from './../../3.png'


export default function Header() {
  return (
    <div className='header'>
        <div className="headerWrapper">
            <div className="headerLogoContainer">
            <img src={MyLogo} alt="" className="logoImage" />
            
            </div>
            <div className="headerTitle">
            <h2 className="headerTitleContainer">Njiani</h2>
            </div>
        </div>
      
    </div>
  )
}
