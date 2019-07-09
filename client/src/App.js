import React from "react";
import Grid from "./components/Grid";
import NavBar from "./components/NavBar";
import {BrowserRouter} from 'react-router-dom'
// import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
  
    <div>
      
      <NavBar />
      <Grid />
    </div>
    </BrowserRouter>
  );
}

export default App;
