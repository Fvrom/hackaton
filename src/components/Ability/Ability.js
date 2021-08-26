import React from "react";
import { motion } from "framer-motion";
import { CgArrowLongRight } from "react-icons/cg";

import "./style.css";

const Ability = (props) => {
  return (
    <div className="ability_wrapper">
      <h3>{props.title}</h3>
      <p>{props.paragraf}</p>
      <div className="container">
        <img
          className="heart_image"
          src={props.image}
          alt={props.description}
        ></img>
        <a href="https://raddningsmissionen.se/ability">
          {" "}
          Ta dig till programmet här{" "}
          <motion.div
            className="motion"
            transition={{ ease: "easeIn", duration: 2 }}
          >
            {" "}
            <CgArrowLongRight />{" "}
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Ability;
