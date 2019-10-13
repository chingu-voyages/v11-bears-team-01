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
  /* color: #1c01ff; */
  -webkit-text-stroke: 1px black;
  color: white;
  text-shadow: 3px 3px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000,
    -1px 1px 0 #000, 1px 1px 0 #000;
  letter-spacing: 1.5px;
`;

export default ({ children }) => {
  return (
    <LandingLayout>
      <Hero />
      <AuthWrapper>
        <AppName>Tripia</AppName>
        {children}
      </AuthWrapper>
    </LandingLayout>
  );
};

//AuthWrapper holds either sign up or sign in forms
