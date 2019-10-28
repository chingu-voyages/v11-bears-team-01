import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import ListButton from "../../shared/ListButton";
import { LogOut } from "styled-icons/boxicons-regular/LogOut";
import setAxiosHeader from "../../../utils/setToken";

const DropdownButton = styled(ListButton)`
  font-size: 1rem;
  padding: 20px;
`;
const DropdownMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 4em;
  right: 15px;
  height: auto;
  width: 250px;
  background-color: #fff;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
`;
const LogOutIcon = styled(LogOut)`
  margin-right: 7px;
`;

const Menu = ({ history, ridesDispatch }) => {
  function handleLogOut() {
    ridesDispatch({ type: "CLEAN_RIDES" });
    setAxiosHeader(false);
    window.localStorage.removeItem("token");
    history.push("/");
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
