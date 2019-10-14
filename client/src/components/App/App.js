import React from "react";
import { AuthProvider } from "../../context/AuthContext";
import { UserProvider } from "../../context/UserContext";
import { RidesProvider } from "../../context/RidesContext";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//components
import SignIn from "../Signin/index";
import SignUp from "../Signup/index";
import Dashboard from "../Dashboard/index";
import PrivateRoute from "../shared/PrivateRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <UserProvider>
            <RidesProvider>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </RidesProvider>
          </UserProvider>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
