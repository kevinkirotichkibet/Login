import React from 'react'
import './body.css'
import Button from '@mui/material/Button';
// import image from './../../my_logo.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
// import Icon from '@mui/material/Icon';
// import {Notifications} from "@mui/icons-material"

export default function Body() {
  return (
    <div className='body'>
        <div className="bodyWrapper">
            <div className="bodyTopContainer">
                <h2 className="bodyTitle">Login to your account</h2>
            </div>
            <div className="bodyMiddleContainer">
                <div className="bodyTitleContainer">
                <span className="bodyUsernameTitle">Username</span>
                </div>
                <div className="bodyUsernameContainer">
                    <PersonIcon />
                    <input placeholder='Username' className="bodyUsernameInput" />
                </div>

                <div className="bodyTitleContainer">
                <span className="bodyUsernameTitle">Password</span>
                </div>

                <div className="bodyPasswordContainer">
                    <LockIcon className='passwordIcon'/>
                    <input placeholder='Password' type='password' className="bodyPasswordInput" />
                </div>
                <div className="bodyLoginButtonContainer">
                    {/* <button className="bodyLoginButton">Log In</button> */}
                    <Button  variant="contained">Login</Button>
                </div>
                <div className="bodySignupContainer">
                    <h5 className="signupLink">New to Njiani? <span  className="signupSpan">Sign Up</span></h5>
                </div>
            </div>
        </div>
      
    </div>
  )
}
