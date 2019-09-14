import React from "react";
import { AuthWrapper, Landing, LandingLayout } from "./styles";

export default ({ children }) => {
  return (
    <LandingLayout>
      <Landing>
        <h1>
          <span role="img" aria-label="bikes">
            🚲 🛵 🏍
          </span>
        </h1>
      </Landing>
      <AuthWrapper>{children}</AuthWrapper>
    </LandingLayout>
  );
};

//AuthWrapper holds either sign up or sign in forms
