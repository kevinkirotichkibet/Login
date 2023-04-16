import React from 'react'
import './bodySignUp.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import TwitterIcon from '@mui/icons-material/Twitter';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import GoogleIcon from '@mui/icons-material/Google';



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
            <div className="googleContainer">
            <Button className='googleLoginButton' variant='contained' style={{ backgroundColor: '#EB4335' }} ><GoogleIcon className='googleIcon' />Google</Button>
            </div>
          </div>
            </div>
          <div className="verticalLine"><hr className='bodyContainerHr'></hr></div>

        <div className="bodyWrapperRight">
          <div className="bodyRightContainer">
            <div className="bodyUsernameContainer">

            <h5 className="username">Username</h5>

            {/* <label htmlFor="username" className="required">Username</label> */}
            <div className="bodyIconUsername">

            <PersonIcon /> 
            <input placeholder='Enter Username' name="" className='usernameInput' />  </div>
            </div>
            <div className="bodyEmailContainer">

                <h5 className="emailText">Email</h5>
                <div className="bodyIconEmail">
                <EmailIcon/>
                <input placeholder='Enter Email Address' type="email" className="emailInput" />
                </div>
            </div>
            <div className="passwordContainer">
              <h5 className="passwordText">Password</h5>
              <div className="bodyIconPassword">
              <LockIcon/>
              <input placeholder='Enter Password' type="password" className="passwordInput" />
              </div>
            </div>
            <div className="confirmPasswordContainer">
              <h5 className="confirmPasswordText">Confirm Password</h5>
              <div className="bodyIconPassword">
              <LockIcon/>
              <input placeholder='Confirm Password' type="password" className="passwordInput" />
              </div>
              
            </div>

            <div className="acceptTermsContainer">
              <input type="checkbox" className='myCheckbox' value="yes" />
              <label htmlFor="myCheckbox" className="myCheckboxLabel">I have read and accept the <span className="checkboxSpan">terms & condition</span></label>
            </div>

            <div className="signupButtonContainer">
            <Button className='submitButton' variant="contained">Sign Up</Button>

            </div>
          </div>
        </div>


      </div>
      
    </>
  )
}
