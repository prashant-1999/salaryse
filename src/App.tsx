import React from "react";
import Routes from "./Routes";
import ReactGA from 'react-ga';

const TRACKING_ID = "G-6FXNYW2KMN";
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return ( <Routes />)
 
  
}

export default App;
