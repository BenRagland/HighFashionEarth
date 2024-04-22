import React from "react";
import Styles from "../main.css";

function Instruction(props) {
  return (
    <div className="instruction-comp-container">
      <div className="instruction-header-container">
        <img src={props.image} />
        <h1>{props.number}</h1>
      </div>
      <div className="instructions-text-group">
        <h2>{props.instructions}</h2>
        <p>{props.details}</p>
      </div>
    </div>
  );
}
export default Instruction;
