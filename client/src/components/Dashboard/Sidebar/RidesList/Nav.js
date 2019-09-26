import React from "react";
import styled from "styled-components";
import { setCoords, setCreateMode } from "../../../../utils/actions";
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

export default ({ dispatch, store }) => {
  const { rides } = store;

  function handleClick(e) {
    const id = e.target.dataset.id;
    const ride = rides.filter(ride => id === ride._id);
    //setting currentCoords on map
    dispatch(setCoords(ride[0].waypoints));
    dispatch(setCreateMode(false));
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

//Gotta check if ObjectID mongoose data type is actually a string.