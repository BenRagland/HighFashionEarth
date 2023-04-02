import React from 'react'
import Styles from '../main.css'
import {TiThMenu} from 'react-icons/ti'
import Navbar from './Navbar'
import EmailSignup from './EmailSignup'

function Header (){
    return(
        <div className="header-container">

                <Navbar />

                <div className="hero">
                    <div className="hero-text">
                        <h1 id="hero_line-one">MAKE</h1>
                        <h1 id="hero_line-two">SPACE</h1>
                        <h1 id="hero_line-three">FOR</h1>
                        <h1 id="hero_line-four">NEW</h1>
                        <div className="brand-box">
                            <h2 className="brand-name">High Fashion Earth</h2>
                        </div>
                    </div>
                    <EmailSignup />
                </div>
        </div>
    )
}




export default Header