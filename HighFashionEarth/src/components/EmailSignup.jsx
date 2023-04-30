import React from "react";
import Styles from "../main.css";
import { TiThMenu } from "react-icons/ti";
import Navbar from "./HeaderTitle";
function EmailSignup() {
  return (
    <div className="email-list-container">
      <input placeholder="Email Adress" />
      <h1 className="email-list-text">Signup For Weekly Exclusive Drops</h1>
    </div>
  );
}

export default EmailSignup;
