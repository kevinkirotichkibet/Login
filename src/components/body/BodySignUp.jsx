import React from 'react'
import './bodySignUp.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function BodySignUp() {
  return (
    <> 
      <div className="bodySignUp">
        <div className="bodyWrapperLeft">
          <div className="bodyLeftContainer">
            <h5 className="containerLeftTitle">Or sign in with...</h5>
            <div className="facebookContainer">
            <Button className='facebookLoginButton' variant='contained'><FacebookIcon className='facebookIcon' />Facebook</Button>
            </div>
            <div className="twitterContainer">
            <Button className='twitterLoginButton' variant='contained' style={{ backgroundColor: '#1C99E6' }} ><TwitterIcon className='twitterIcon' />Twitter</Button>
            </div>
          </div>
            </div>
          <div className="verticalLine"><hr className='bodyContainerHr'></hr></div>

        <div className="bodyWrapperRight">
          <div className="bodyRightContainer">
            <div className="bodyUsernameContainer">

            <h5 className="username">Username</h5>
            <input placeholder='Enter Username' name="" id="" />
            </div>

            <div className="bodyEmailContainer">
                <h5 className="emailText">Email</h5>
                <input placeholder='Enter Email Address' type="email" className="usernameInput" />
            </div>
            <div className="passwordContainer">
              <h5 className="passwordText">Password</h5>
              <input placeholder='Enter Password' type="password" className="passwordInput" />
            </div>
            <div className="confirmPasswordContainer">
              <h5 className="confirmPasswordText">Confirm Password</h5>
              <input placeholder='Confirm Password' type="password" className="passwordInput" />
            </div>
          </div>
        </div>


      </div>
      
    </>
  )
}
