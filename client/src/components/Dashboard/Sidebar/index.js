import React, { useContext } from "react";
import styled from "styled-components";
import { RidesContext } from "../../../context/RidesContext";
import RidesList from "./RidesList/index";
import CreateButton from "./CreateButton";

const Sidebar = styled.aside`
  height: 100%;
  flex: 0 1 20%;
  padding: 25px 30px;
  transition: transform 200ms;
  background: #fff;

  @media (max-width: 1000px) {
    position: absolute;
    z-index: 2000;
    box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
    transform: ${props => (props.open ? "" : "translateX(-100%)")};
  }
`;

export default props => {
  const { rides } = useContext(RidesContext);
  const { routeDispatch, setCoords, toggleSidebar, sidebarOpen } = props;

  return (
    <Sidebar open={sidebarOpen}>
      <CreateButton
        {...{ routeDispatch, setCoords, toggleSidebar, sidebarOpen }}
      />
      <RidesList {...{ ...props, rides }} />
    </Sidebar>
  );
};
