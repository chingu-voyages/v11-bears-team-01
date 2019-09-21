import React from "react";
import styled from "styled-components";
import UserDisplay from "./UserDisplay";
import Logo from "./Logo";
import useOpenMenu from "./useOpenMenu";
import Dropdown from "./Dropdown";

const Header = styled.header`
  display: flex;
  position: absolute;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4em;
  background-color: #fff;
  box-shadow: 0 2px 35px 0 rgba(0, 0, 0, 0.1);
  font-family: "Archivo", sans-serif;
`;

export default ({ user }) => {
  const { openMenu, handleOpenMenu } = useOpenMenu();

  return (
    <React.Fragment>
      <Header>
        <Logo />
        <UserDisplay {...{ user, handleOpenMenu }} />
        {openMenu && <Dropdown />}
      </Header>
    </React.Fragment>
  );
};
