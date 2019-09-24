import React, { useContext } from "react";
import styled from "styled-components";
import { RidesContext } from "../../../context/RidesContext";
import RidesList from "./RidesList/index";
import CreateButton from "./CreateButton";

const Sidebar = styled.aside`
  height: 100%;
  flex: 0 1 20%;
  padding: 25px 30px;
`;

export default () => {
  const { dispatch } = useContext(RidesContext);
  return (
    <Sidebar>
      <CreateButton {...{ dispatch }} />
      <RidesList {...{ dispatch }} />
    </Sidebar>
  );
};
