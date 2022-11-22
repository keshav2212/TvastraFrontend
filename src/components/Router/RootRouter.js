import React from "react";

import {
    BrowserRouter as Router, Route,
    Switch
} from "react-router-dom";
import Error from "../Error/Error";


import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Signin/Signin";
const RootRouter = ({ isAuthenticated, onLogin }) => {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />       
        <Route
            exact
            path="/signin"
            component={(props) => (
              <Signin
                isAuthenticated={isAuthenticated}
                onLogin={onLogin}
                {...props}
              />
            )}
          />
        <Route exact path="/error" component={Error} />
      </Switch>
      
    </Router>
  );
};

export default RootRouter;
