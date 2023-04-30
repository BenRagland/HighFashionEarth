import React from "react";
import Styles from "../main.css";

function Instruction(props) {
  return (
    <div className="instruction-comp-container">
      <div className="instruction-header-container">
        <img src={props.image} />
        <h1>{props.number}</h1>
      </div>
      <h4>{props.instructions}</h4>
      <p>{props.details}</p>
    </div>
  );
}
export default Instruction;
