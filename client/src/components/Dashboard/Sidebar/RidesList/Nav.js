import React from "react";
import styled from "styled-components";
import { updateRoute } from "../../../../utils/actions";
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

export default ({ routeDispatch, rides, setCoords }) => {
  function handleClick(e) {
    const id = e.target.dataset.id;
    const ride = rides.find(ride => id === ride._id);
    //setting currentRoute to display on map
    setCoords(ride.waypoints);
    routeDispatch(updateRoute({ createMode: "off", ...ride }));
  }

  return (
    <Nav>
      <Ul>
        {rides.map((ride, i) => (
          <Li key={i} data-id={ride._id} onClick={e => handleClick(e)}>
            {ride.title}
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

//maybe check if li elements can hold onClick listeners.
