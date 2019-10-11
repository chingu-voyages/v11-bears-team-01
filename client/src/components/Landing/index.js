import React from "react";
import styled from "styled-components";
import Hero from "./Hero";

const LandingLayout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const AuthWrapper = styled.div`
  flex-basis: 37.5%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }
`;

export default ({ children }) => {
  return (
    <LandingLayout>
      <Hero />
      <AuthWrapper>{children}</AuthWrapper>
    </LandingLayout>
  );
};

//AuthWrapper holds either sign up or sign in forms
