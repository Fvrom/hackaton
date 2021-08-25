import React, { useState, useEffect } from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../../components/Header/Header";
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
      setProgression(progression);
    });
  }, []);

  const [isLoaded, setIsLoaded] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function () {
      setIsLoaded(1);
    });
  });

  return (
    <>
      <Header> </Header>

      <div className="canvas_wrapper">
        <p script={{ visibility: progression ? "visible" : "hidden" }}>
          Loading {progression * 100} percent...
        </p>

        <Unity
          script={{ visibility: isLoaded ? "visible" : "hidden" }}
          className="fadeIn unity_canvas"
          unityContext={unityContext}
        />
      </div>
    </>
  );
};

export default HomePage;
