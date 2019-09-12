import React from "react";
import { AuthWrapper, Landing, LandingLayout } from "./styles";

export default ({children}) => {
  return (
    <LandingLayout>
      <Landing>
        <h2>This is an App.</h2>
        <h3>A good one.</h3>
      </Landing>
      <AuthWrapper>{children}</AuthWrapper>
    </LandingLayout>
  );
};

//AuthWrapper holds either sign up or sign in forms
