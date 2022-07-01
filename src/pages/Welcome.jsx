import React from "react";
import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>This is the WELCOME page</h1>
      <Route path="welcome/user-login" exact>
        <p>Welcome, New User!</p>
      </Route>
    </div>
  );
};

export default Welcome;
