import React from "react";
import styled from "styled-components";
import { updateRoute } from "../../../../utils/actions";
import ListButton from "../../../shared/ListButton";

const Nav = styled.nav`
  margin-top: 5px;
`;
const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
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
          <li key={i}>
            <ListButton data-id={ride._id} onClick={e => handleClick(e)}>
              {ride.title}
            </ListButton>
          </li>
        ))}
      </Ul>
    </Nav>
  );
};

//maybe check if li elements can hold onClick listeners.
