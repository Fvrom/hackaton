import React from "react";
import { Router } from "@reach/router";
import HomePage from "/pages/HomePage";

function App() {
    /*function spawnEnemies() {
    unityContext.send("GameController", "SpawnEnemies", 100);
  }
*/
    return (
        <Router>
            <HomePage path="/" />
        </Router>

        /*<div>
      <Unity unityContext={unityContext} />
    </div>*/
    );
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
