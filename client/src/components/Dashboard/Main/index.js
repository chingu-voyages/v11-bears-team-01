import React from "react";
import styled from "styled-components";
import Map from "../Map/index";
import { usePosition } from "use-position";

const Main = styled.main`
  height: 100%;
  width: 100%;
  flex: 0 1 80%;
  background: blue;
`;

const config = {
  enableHighAccuracy: true
};

export default ({ createMode }) => {
  //geolocation data (use only for create mode)
  const { latitude: lat, longitude: lng, error } = usePosition(false);

  return <Main>{lat && !error && <Map coords={[lat, lng]} />}</Main>;
};
