import React from "react";
import { AuthProvider } from "../../context/AuthContext";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
//components
import SignIn from "../Signin/index";
import SignUp from "../Signup/index";
import Dashboard from "../Dashboard/Dashboard";
import PrivateRoute from "../../utils/PrivateRoute";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
