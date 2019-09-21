import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 3em;
  background: cyan;
  position: relative;
  bottom: 0;
  width: 100vw;
`;

export default () => {
  return (
    <React.Fragment>
      <Footer>
        <h3>Footer</h3>
      </Footer>
    </React.Fragment>
  );
};
