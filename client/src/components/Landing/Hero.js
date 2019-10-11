import React from "react";
import styled from "styled-components";
import Background from "./Background";

const Hero = styled.div`
  position: relative;
  flex-basis: 62.5%;
  background-color: rgba(205, 206, 228, 0.4);
  padding: 1em;
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Text = styled.h1`
  background: rgba(252, 252, 255, 1);
  display: flex;
  margin: 0;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 350px;
  border-radius: 3px;
  padding: 0px 20px;
  width: auto;
  font-weight: 600;
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -195px;
  margin-top: -50px;
  color: rgba(19, 30, 65, 0.9);
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
`;

export default () => {
  return (
    <Hero>
      <Text>Map & save all your rides</Text>
      <Background />
    </Hero>
  );
};
