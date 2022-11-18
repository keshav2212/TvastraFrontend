import React from "react";

import {
    BrowserRouter as Router, Route,
    Switch
} from "react-router-dom";


import LandingPage from "../LandingPage/LandingPage";
import Login from "../login/Login";
const RootRouter = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />       
        <Route exact path="/login" component={Login} />       
      </Switch>
      
    </Router>
  );
};

export default RootRouter;
