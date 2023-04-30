import React from "react";
import Styles from "../main.css";
import { TiThMenu } from "react-icons/ti";
import HeaderTitle from "./HeaderTitle";
import EmailSignup from "./EmailSignup";
import PaperPlane from "../assets/PaperPlane.png"


function Header() {

    function handleCLick(e){
        console.log("Should change the state")
    }
    
  return (
    <div className="header-container" id="header">
        
        

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
            <img src={PaperPlane} className="paper-plane"/>
            <div className="email-signup-container">
                <EmailSignup />
            </div>
        </div>


    </div>
  );
}

export default Header;
