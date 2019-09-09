import React from "react";
import { AuthProvider } from "../../02 - context/AuthContext";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="App"></div>;
    </AuthProvider>
  );
}

export default App;
