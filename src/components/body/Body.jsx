import React from 'react'
import './body.css'
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
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
                    {/* <img src={PersonIcon} alt="" className="bodyUsernameIcon" /> */}
                    <input placeholder='Username' className="bodyUsernameInput" />
                </div><div className="bodyPasswordContainer">

                <div className="bodyTitleContainer">
                <span className="bodyUsernameTitle">Password</span>
                </div>

                    <img src="" alt="" className="bodyPasswordIcon" />
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
