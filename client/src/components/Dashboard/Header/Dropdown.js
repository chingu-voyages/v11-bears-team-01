import React from "react";
import { withRouter } from "react-router-dom";
import { DropdownMenu, DropdownButton, LogOutIcon } from "./styles";
//import { GoogleLogout } from 'react-google-login';        //used for googleLogout once we can login with google successfully

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
