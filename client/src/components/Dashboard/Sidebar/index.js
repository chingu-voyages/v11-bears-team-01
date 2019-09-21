import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../../../context/UserContext";
import Nav from "./Nav/index";

const Sidebar = styled.div`
  height: 100%;
  background: pink;
  flex: 0 1 25%;
`;

export default ({ setCreateMode }) => {
  const { userStore } = useContext(UserContext);

  return (
    <React.Fragment>
      <Sidebar>
        <h3>Sidebar</h3>
      </Sidebar>
    </React.Fragment>
  );
};
