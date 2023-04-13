import React from 'react'
import './body.css'
import Button from '@mui/material/Button';
// import image from './../../my_logo.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
// import Icon from '@mui/material/Icon';
// import {Notifications} from "@mui/icons-material"
import {useNavigate, Link } from 'react-router-dom';
// import SignUp from '../../pages/signUp/SignUp';

export default function Body() {
    const navigate = useNavigate();

  const navigateToSignUp = () => {
    // 👇️ navigate to /contacts
    navigate('/src/pages/signUp/SignUp',{replace:true});
  };


  return (

    <div className='body'>
        <div className="bodyWrapper">
            <div className="bodyTopContainer">
                <h5 className="bodyTitle">Login to your account</h5>
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
                    <Button className='loginButton' variant="contained">Login</Button>
                </div>
                <hr className='hrLink'/>
                <div className="bodySignupContainer">
                    {/* <hr />       */}
                    <h5 className="signupLink">New to Njiani? <Link   className="signupSpan" to={navigateToSignUp}>Sign Up</Link></h5>

                </div>
                

            </div>
        </div>
      
    </div>
  )
}
