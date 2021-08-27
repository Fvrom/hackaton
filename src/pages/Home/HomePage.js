import React, { useState, useEffect, useRef } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
//import Header from "../../components/Header/Header";
import Ability from "../../components/Ability/Ability";
import AboutPage from "../About/About";

import { motion } from "framer-motion";
import Heart from "../../assets/Heart.svg";
import { HiChevronDown } from "react-icons/hi";
//import { HiArrowRight } from "react-icons/hi";
import anime from "animejs/lib/anime.es.js";
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


*/
  /* const [isDisabledScroll, setDisableScroll] = useState(false); */
  /*
  const [isScrolled, setScroll] = useState(false);
  //const countScroll = 0;

  window.addEventListener("scroll", function () {
    if (this.scroll) {
      setScroll(true);
    } */
  /* 
    if (setScroll === true) {
      setDisableScroll(true);
    }

    // countScroll++
  }); */
  // overflow hidden

  const [isButtonClicked, setButtonClicked] = useState(false);
  /* 
  useEffect(function (onClick) {
    setButtonClicked(true);
  }, []); */

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

  /*unityContext.on("ending" , function (TheEnd) {

  })   */
  const scrolling = useRef();
  useEffect(() => {
    anime({
      targets: scrolling.current,
      translateY: [-500, 0],
      opacity: [0, 1],
      easing: "easeInOutExpo",
    });
  }, []);

  const [isClicked, setIsClicked] = useState(false);

  unityContext.on("TheEnd", function (isClicked) {
    setIsClicked(true);

    window.scrollTo(0, 900);
  });

  /* 
  const { scrollYProgress } = useViewportScroll();
  const scaleAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 1.5]); 
  
  */

  /*
handleScroll(element) {
 /*  const target = event.target;

  useEffect(() => {

  }) 
} */

  return (
    <section>
      <div
        className="presentation_wrapper"
        style={{
          visibility: isButtonClicked ? "hidden" : "visible",
        }}
      >
        <motion.div transition={{ ease: "easeIn", duration: 3 }}>
          <p className="fadeIn">
            Scrolla eller använd pilarna för att navigera genom berättelsen om
            Vanjo
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
        <button
          className="button_continue"
          onClick={() => {
            setButtonClicked(true);
          }}
        >
          Klicka för att börja
        </button>
      </div>

      <div
        className="loading_wrapper"
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      >
        <motion.div
          className="img_container"
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <motion.div
            animate={{ opacity: [0, 0.5, 1, 0.5, 0] }}
            transition={{
              ease: "easeOut",
              repeat: Infinity,
              duration: 2,
            }}
          >
            <img src={Heart} alt="heart"></img>
          </motion.div>
          <div className="loading_text">
            <p style={{ visibility: progression ? "hidden" : "visible" }}>
              Laddar sidan
            </p>
            <motion.span
              className="dots_animation"
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <p>.</p>
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 1, 0, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <p> .</p>
            </motion.span>
            <motion.span
              animate={{ opacity: [0, 0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <p> .</p>
            </motion.span>
          </div>
        </motion.div>
      </div>

      <div className="canvas_wrapper">
        <motion.div transition={{ ease: "easeIn", duration: 1 }}>
          <Unity className="unity_canvas" unityContext={unityContext} />
        </motion.div>
      </div>

      <Ability
        ref={scrolling}
        title={"Ability-programmet"}
        paragraf={"En möjlighet när alla andra dörrar stängts"}
        image={Heart}
        description={"Icon of a heart"}
      >
        {isClicked === true}
      </Ability>
      <AboutPage></AboutPage>
    </section>
  );
};

export default HomePage;
