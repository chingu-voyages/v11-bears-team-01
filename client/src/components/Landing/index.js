import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import { Route } from "styled-icons/fa-solid/Route";

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
const AppName = styled.h1`
  font-size: 25px;
  padding: 20px;
  color: rgba(152, 152, 169, 0.7);
  @media (min-width: 768px) {
    display: none;
  }
`;

export default ({ children }) => {
  return (
    <LandingLayout>
      <Hero />
      <AuthWrapper>
        <AppName>Map and save all your rides</AppName>
        {children}
      </AuthWrapper>
    </LandingLayout>
  );
};

//AuthWrapper holds either sign up or sign in forms
