import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Ability = (props) => {
  return (
    <div className="ability_wrapper">
      <h3>{props.title}</h3>
      <p>{props.paragraf}</p>
      <a href="https://raddningsmissionen.se/ability">
        {" "}
        Ta dig till programmet här{" "}
      </a>
      <div></div>
    </div>
  );
};

export default Ability;
