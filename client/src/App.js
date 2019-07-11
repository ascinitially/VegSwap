import React from "react";
import Grid from "./components/Grid/index";
import NavBar from "./components/NavBar/index";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Loginscreen from './components/Loginscreen';
import Footer from "./components/Footer/index";
import Login from "./components/Login";
import "./components/css/Login.css";
// import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
 <React.Fragment>
        <NavBar />
        <Switch>
          <Redirect exact path = "/" to = "/Grid" />
          <Route path = "/Grid" component = { Grid } />
          <Route path = "/Login" component = { Loginscreen } />
          <Route path = "/Register" component = { Register } />
          <Loginscreen />
          <Register />
        </Switch>
        <Footer />
      </React.Fragment>
  );
}

export default App;
