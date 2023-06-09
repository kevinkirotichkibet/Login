import React from 'react'
import './bodyLogin.css'
import Button from '@mui/material/Button';
// import image from './../../my_logo.svg'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
// import Icon from '@mui/material/Icon';
import {useState} from 'react'
import { Navigate } from "react-router-dom";



export default function Body() {
    
    
    
    // function handleLogin() {
    //     // perform login logic here, e.g. sending a login request to the server
    //     // if login is successful, navigate to the main page
    //     Navigate("/src/pages/signUp.jsx");
    //   }
    

    const [username, setUsername] = useState('')
    const handleChange = (e) => {
    const value = e.target.value
    setUsername(value)
    Navigate("/src/pages/signUp.jsx");
  }

    
    return (

    <div className='bodyLogin'>
        <div className="bodyWrapper">
            <div className="bodyTopContainer">
                <h5 className="bodyTitle">Login to your account</h5>
            </div>
            <div className="bodyMiddleContainer">
                <div className="bodyTitleContainer">
                <span className="bodyUsernameTitle">Username</span>
                </div>
                <div className="bodyUsernameContainer">
                    <PersonIcon className='usernameIcon' />
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
                    <Button className='loginButton' variant="contained" onClick={handleChange} >Login</Button>
                </div>
                <hr className='hrLink'/>
                <div className="bodySignupContainer">
                    {/* <hr />       */}
                    <h5 className="signupLink">New to Njiani? <span   className="signupSpan">Sign Up</span></h5>

                </div>
                

            </div>
        </div>
      
    </div>
  )
}
