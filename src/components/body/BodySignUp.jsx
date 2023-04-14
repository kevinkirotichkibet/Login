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
          <div className="verticalLine"><hr className='bodyContainerHr'></hr></div>

        </div>
        <div className="bodyWrapperRight">
          Right
        </div>


      </div>
      
    </>
  )
}
