import React from 'react'
import './home.css'

import Header from '../../components/header/Header'
import Body from '../../components/body/Body'


export default function Home() {
  return (
    <>
    <div className="homeContainer">
    <div className="homeWrapper">

        <Header />
        <Body />
    </div>
    </div>


    </>
  )
}
