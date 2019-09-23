import React from "react";
import styled from "styled-components";
import Map from "../Map/index";

const Main = styled.main`
  height: 100%;
  width: 100%;
  flex: 0 1 80%;
  background: blue;
`;

export default ({ currentCoords }) => {
  const [lat, lng] = currentCoords;
  return <Main>{lat && <Map coords={[lat, lng]} />}</Main>;
};
