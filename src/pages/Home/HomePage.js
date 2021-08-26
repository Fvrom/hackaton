import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
//import Header from "../../components/Header/Header";
import Ability from "../../components/Ability/Ability";
import AboutPage from "../About/About";

import { motion } from "framer-motion";
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
    <>
      <div
        className="loading_wrapper"
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      >
        <motion.div transition={{ ease: "easeOut", duration: 2 }}>
          <p style={{ visibility: progression ? "hidden" : "visible" }}>
            Loading ...
          </p>
        </motion.div>
      </div>

      <div className="canvas_wrapper">
        <motion.div transition={{ ease: "easeIn", duration: 2 }}>
          <Unity className="unity_canvas" unityContext={unityContext} />
        </motion.div>
      </div>
      <Ability
        title={"Ability-programmet"}
        paragraf={"En möjlighet när alla andra dörrar stängs"}
      ></Ability>
      <AboutPage> </AboutPage>
    </>
  );
};

export default HomePage;
