import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import Header from "../../components/Header/Header";
import "./style.css";

const HomePage = () => {
  const unityContext = new UnityContext({
    /*
    loaderUrl: "/UnityTest/public_html/Build/WEBGL TEST.loader.js",
    dataUrl: "/UnityTest/public_html/Build/WEBGL TEST.data",
    frameworkUrl: "/UnityTest/public_html/Build/WEBGL TEST.framework.js",
    codeUrl: "/UnityTest/public_html/Build/WEBGL TEST.wasm", */
    loaderUrl: "/UnityBuild/Build/UnityBuild.loader.js",
    dataUrl: "/UnityBuild/Build/UnityBuild.data",
    frameworkUrl: "/UnityBuild/Build/UnityBuild.framework.js",
    codeUrl: "/UnityBuild/Build/UnityBuild.wasm",

    companyName: "Omnick",
    productName: "HackatonHT2021",
    productVersion: "1.0",
  });

  function ChangeName() {
    unityContext.send("Sphere", "ChangeName", "Robin");
  }
  /*
för inladdning 
*/
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    unityContext.on("loaded", () => setIsLoaded(true));
  }, []);

  return (
    <>
      <Header> </Header>
      <div className="canvas_wrapper">
        <button onChange={ChangeName}>Change name! </button>
        <Unity className="unity_canvas" unityContext={unityContext} />
      </div>
    </>
  );
};

export default HomePage;
