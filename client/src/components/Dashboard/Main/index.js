import React from "react";
import styled from "styled-components";
import Map from "../Map/index";
import { usePosition } from "use-position";

const Main = styled.main`
  position: relative;
  top: 4em;
  height: 90vh;
  width: 100vw;
`;

const config = {
  enableHighAccuracy: true
};

export default () => {
  const { latitude: lat, longitude: lng, error } = usePosition(false, config);

  return <Main>{lat && !error && <Map coords={[lat, lng]} />}</Main>;
};
