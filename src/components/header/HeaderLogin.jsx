import React from 'react'
import './headerLogin.css'

// import MyLogo from './../../3.png'
// import Logo from './../../assets/road_logo.svg'
import Logo from './../../assets/road_logo_green.png'


export default function Header() {
  return (
    <div className='headerLogin'>
        <div className="headerLoginWrapper">
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
