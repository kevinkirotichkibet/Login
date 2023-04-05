import React from 'react'
import './header.css'

// import MyLogo from './../../3.png'
import Logo from './../../assets/road_logo.svg'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerWrapper">
            <div className="headerLogoContainer">
            <img src={Logo} alt="" className="logoImage" />
            <h2 className="headerTitleContainer">Njiani</h2>
            </div>
            {/* <div className="headerTitle">
            
            </div> */}
        </div>
      
    </div>
  )
}
