import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

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
          Ta dig till programmet här
          <motion.div
            animate={{ x: [5, 15, 5] }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 4,
            }}
          >
            <HiArrowRight style={{ color: "black" }} />
          </motion.div>
        </a>
      </div>
    </div>
  );
};

export default Ability;
