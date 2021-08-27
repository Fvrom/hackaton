import React from "react";
import { motion } from "framer-motion";
import arrow from "../../assets/right_arrow-min.png";

import "./style.css";

const Ability = (props) => {
  return (
    <div className="ability_wrapper">
      <h3>{props.title}</h3>
      <p>{props.paragraf}</p>

      <img
        className="heart_image"
        src={props.image}
        alt={props.description}
      ></img>
      <div className="container">
        <a href="https://raddningsmissionen.se/ability">
          Läs mer om programmet här
          <motion.div
            animate={{ x: [8, 18, 8] }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 3,
            }}
          >
            <img src={arrow} alt="arrow to the right"></img>
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Ability;
