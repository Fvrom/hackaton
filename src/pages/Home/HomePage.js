import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
//import Header from "../../components/Header/Header";
import Ability from "../../components/Ability/Ability";
import AboutPage from "../About/About";

import { motion } from "framer-motion";
import Heart from "../../assets/Heart.svg";
import { HiChevronDown } from "react-icons/hi";
import "./style.css";

const HomePage = () => {
  const unityContext = new UnityContext({
    loaderUrl: "/UnityBuild/Build/UnityBuild.loader.js",
    dataUrl: "/UnityBuild/Build/UnityBuild.data",
    frameworkUrl: "/UnityBuild/Build/UnityBuild.framework.js",
    codeUrl: "/UnityBuild/Build/UnityBuild.wasm",
    companyName: "Omnick",
    productName: "HackatonHT2021",
    productVersion: "1.0",
  });

  //function on(eventName: "loaded", eventListener: () => void): void;

  /* function ChangeName() {

unityContext.send("Sphere", "ChangeName", "Robin");

}*/

  /*

för inladdning

- /

/*



*/

  const [isScrolled, setScroll] = useState(false);
  /* 
  useEffect(function () {
    onscroll.apply("scroll", function (scrolling) {
      setScroll(true);
    });
  }); */
  window.addEventListener("scroll", function () {
    if (this.scroll) {
      setScroll(true);
    }
  });

  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setTimeout(() => {
        setProgression(progression);
      }, 2000);
    });
  });

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(function () {
    unityContext.on("loaded", function () {
      setTimeout(() => {
        setIsLoaded(true);
      }, 3000);
    });
  });

  return (
    <section>
      <div
        className="presentation_wrapper"
        style={{ visibility: isScrolled ? "hidden" : "visible" }}
      >
        <motion.div transition={{ ease: "easeIn", duration: 3 }}>
          <p className="fadeIn">
            Scrolla för att navigera genom berättelsen om Vanjo
          </p>
        </motion.div>
        <motion.div
          animate={{ y: [5, 25, 5] }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 3,
          }}
        >
          <HiChevronDown size={"5rem"} color={"#E07F48"}></HiChevronDown>
        </motion.div>
      </div>

      <div
        className="loading_wrapper"
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      >
        <motion.div transition={{ ease: "easeOut", duration: 1 }}>
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 1.5,
            }}
          >
            <img src={Heart} alt="heart"></img>
          </motion.div>
          <p style={{ visibility: progression ? "hidden" : "visible" }}>
            Laddar sidan...
          </p>
        </motion.div>
      </div>

      <div className="canvas_wrapper">
        <motion.div transition={{ ease: "easeIn", duration: 1 }}>
          <Unity className="unity_canvas" unityContext={unityContext} />
        </motion.div>
      </div>
      <Ability
        title={"Ability-programmet"}
        paragraf={"En möjlighet när alla andra dörrar stängts"}
        image={Heart}
        description={"Icon of a heart"}
      ></Ability>
      <AboutPage> </AboutPage>
    </section>
  );
};

export default HomePage;
