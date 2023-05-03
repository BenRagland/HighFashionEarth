import React from "react";
import Styles from "../main.css";
import { TiThMenu } from "react-icons/ti";
import Navbar from "./HeaderTitle";

function EmailSignup(props) {
  const [email, setEmail] = React.useState("");
  const [showInput, setShowInput] = React.useState(true)

  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  
  const handleClick = (e) => {
    e.target.style.display = 'none'
    setShowInput(false)
    console.log("clicked");
  }
  console.log(email)
  return (
    <div className="email-list-container">
      {showInput ? <input 
      onChange={handleChange} 
      value={email} 
      type='email'
      placeholder="Email Address" /> : <h2 style={{fontFamily:'inter',color:'#604d4d'}}>Thanks for Signing Up!</h2>
      }
      {showInput ?
      <h1 className="email-list-text">Signup For Weekly Exclusive Drops</h1> : " "
      }
      <button 
      
      className="submit-button" onClick={handleClick}>
        submit
      </button>
    </div>
  );
}

export default EmailSignup;
