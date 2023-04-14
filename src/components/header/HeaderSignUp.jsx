import React from 'react'
import './headerSignUp.css'

import Button from '@mui/material/Button';
import Logo from './../../assets/road_logo.svg'


export default function HeaderSignUp() {
  return (
    
        <div className="header">

            <div className="headerSignupWrapper">
                <div className="headerContainerLeft">
                    <div className="headerLogoContainer">
                        <img src={Logo} alt="" className="headerLogoImage" />
                        <h3 className="headerTitle">Njiani</h3>
                    </div>
                </div>
                <div className="headerContainerRight">
                    <div className="headerAlreadyContainer">
                        <h4 className="alreadyHaveAccount">Already have an account?</h4>
                        <Button className='loginButton' variant='contained' >Log in</Button>
                    </div>
                </div>
            </div>
        </div>
            
        

    )
}
