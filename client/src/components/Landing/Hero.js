import React from "react";
import styled from "styled-components";
import Background from "./Background";

const Hero = styled.div`
  flex-basis: 62.5%;
  background-color: #f7f7fc;
  padding: 1em;
  @media (max-width: 1200px) {
    flex-basis: 50%;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const Text = styled.div``;

export default () => {
  return (
    <Hero>
      <Background />
    </Hero>
  );
};
