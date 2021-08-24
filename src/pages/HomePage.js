<<<<<<< HEAD
import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const HomePage = () => {
  const unityContext = new UnityContext({
=======
import react from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
>>>>>>> d54238456c00bb439e832be4dd3a8ffcad558be5
    loaderUrl: "/UnityTest/public_html/Build/WEBGL TEST.loader.js",
    dataUrl: "/UnityTest/public_html/Build/WEBGL TEST.data",
    frameworkUrl: "/UnityTest/public_html/Build/WEBGL TEST.framework.js",
    codeUrl: "/UnityTest/public_html/Build/WEBGL TEST.wasm",
<<<<<<< HEAD
  });

  return (
    <>
      <Unity unityContext={unityContext} />
    </>
  );
};
=======
});

return (
    <>
        <Unity unityContext={unityContext} />
    </>
);
>>>>>>> d54238456c00bb439e832be4dd3a8ffcad558be5

export default HomePage;
