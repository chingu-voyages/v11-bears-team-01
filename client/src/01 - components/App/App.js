import React from "react";
import { AuthProvider } from "../../02 - context/AuthContext";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
//components
import SignIn from "../Signin/index";
import SignUp from "../Signup/index";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Router>
          <Route exact path="/" render={() => <Redirect to="/login" />} />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/sign-up" component={SignUp} />
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
