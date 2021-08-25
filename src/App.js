import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home/HomePage";
// import Unity, { UnityContext } from "react-unity-webgl";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
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
