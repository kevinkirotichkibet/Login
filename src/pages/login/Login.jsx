import React from 'react'
import './login.css'

import HeaderLogin from '../../components/header/HeaderLogin'
import Body from '../../components/body/BodyLogin'


export default function Home() {
  return (
    <>
    <div className="homeContainer">
        <HeaderLogin />
    <div className="homeWrapper">

        <Body />
    </div>
    </div>


    </>
  )
}
