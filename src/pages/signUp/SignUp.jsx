import React from 'react'
import './signUp.css'
import HeaderSignUp from '../../components/header/HeaderSignUp'
import BodySignUp from '../../components/body/BodySignUp'


export default function SignUp() {
  return (
    <div className='signUpContainer'>
      <HeaderSignUp/>
      <BodySignUp />
    </div>
  )
}
