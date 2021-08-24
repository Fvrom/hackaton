import React from "react";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "/UnityTest/public_html/Build/WEBGL TEST.loader.js",
  dataUrl: "/UnityTest/public_html/Build/WEBGL TEST.data",
  frameworkUrl: "/UnityTest/public_html/Build/WEBGL TEST.framework.js",
  codeUrl: "/UnityTest/public_html/Build/WEBGL TEST.wasm",
});

function App() {
  /*function spawnEnemies() {
    unityContext.send("GameController", "SpawnEnemies", 100);
  }
*/
  return (
    <div>
      <Unity unityContext={unityContext} />
    </div>
  );
}
export default App;
