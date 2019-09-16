import React from "react";
import { Header } from "./styles";
import UserDisplay from "./UserDisplay";
import Logo from "./Logo";
import useOpenMenu from "./useOpenMenu";
import Dropdown from "./Dropdown";

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
