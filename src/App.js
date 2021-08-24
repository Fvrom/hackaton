import React from "react";
import { Router } from "@reach/router";
<<<<<<< HEAD
import HomePage from "../src/pages/HomePage";
// import Unity, { UnityContext } from "react-unity-webgl";
=======
import HomePage from "/pages/HomePage";
>>>>>>> d54238456c00bb439e832be4dd3a8ffcad558be5

function App() {
    /*function spawnEnemies() {
    unityContext.send("GameController", "SpawnEnemies", 100);
  }
*/
<<<<<<< HEAD
  return (
    <Router>
      <HomePage path="/" />
      {/* <AboutPage path="/about" /> */}
      {/* <NotFound default /> */}
    </Router>
    /*<div>
      <Unity unityContext={unityContext} />
    </div>*/
  );
=======
    return (
        <Router>
            <HomePage path="/" />
        </Router>

        /*<div>
      <Unity unityContext={unityContext} />
    </div>*/
    );
>>>>>>> d54238456c00bb439e832be4dd3a8ffcad558be5
}
export default App;

/* return (
        <div className="App">
            <Router>
                <HomePage path="/" />
                <ApodPage path="/apod-page" />
                <NotFound default />
            </Router>
        </div>
    );
    */
