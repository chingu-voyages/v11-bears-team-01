import React from "react";
import { AuthWrapper, Landing, LandingLayout } from "./styles";

export default props => {
  return (
    <LandingLayout>
      <Landing>
        <h2>This is an App.</h2>
        <h3>A good one.</h3>
      </Landing>
      <AuthWrapper>{props.children}</AuthWrapper>
    </LandingLayout>
  );
};

//AuthWrapper holds either sign up or sign in forms
