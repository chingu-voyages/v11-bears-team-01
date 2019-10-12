import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ListButton from "../../shared/ListButton";
import { DropdownMenu, LogOutIcon } from "./styles";

const DropdownButton = styled(ListButton)`
  font-size: 1rem;
  padding: 20px;
`;

const Menu = props => {
  function handleLogOut() {
    window.localStorage.removeItem("token");
    props.history.push("/");
  }

  return (
    <React.Fragment>
      <DropdownMenu>
        <DropdownButton onClick={handleLogOut}>
          <LogOutIcon size={"20px"} />
          Log out
        </DropdownButton>
      </DropdownMenu>
    </React.Fragment>
  );
};

export default withRouter(Menu);
