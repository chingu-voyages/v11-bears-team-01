import React from "react";
import styled from "styled-components";
import { colors } from "../../../../styles/vars";

const Nav = styled.nav`
  margin-top: 5px;
`;
const Ul = styled.ul`
  list-style: none;
  text-align: left;
  font-family: "Archivo", sans-serif;
  font-weight: 500;
  font-size: 14px;
  padding: 0;
  margin: 0;
  color: ${colors.fontBlack};
  /* background: red; */
`;
const Li = styled.li`
  padding: 15px 10px;
  cursor: pointer;
  color: rgba(19, 30, 65, 0.6);
  &:hover {
    background: rgba(205, 206, 228, 0.4);
    color: rgba(19, 30, 65, 0.8);
  }
`;

export default ({ setCurrentCoords, setCreateModeOn }) => {
  function handleClick() {
    //setting waypoints
    setCurrentCoords([15, 0]);
    setCreateModeOn(false);
  }
  return (
    <Nav>
      <Ul>
        <Li onClick={handleClick}>Road X</Li>
        <Li>Road Y</Li>
        <Li>Road Z</Li>
        <Li>Road Z</Li>
      </Ul>
    </Nav>
  );
};

//fetch all rides from context
