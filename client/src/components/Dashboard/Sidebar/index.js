import React from "react";
import styled from "styled-components";
import RidesList from "./RidesList/index";
import CreateButton from "./CreateButton";

const Sidebar = styled.aside`
  height: 100%;
  flex: 0 1 20%;
  padding: 25px 30px;
`;

export default props => {
  return (
    <Sidebar>
      <CreateButton {...props} />
      <RidesList {...props} />
    </Sidebar>
  );
};
