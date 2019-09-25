import React from "react";
import styled from "styled-components";
import useSetMap from "./useSetMap";
import useHandleRoute from "./useHandleRoute";

const Map = styled.div`
  width: 100%;
  height: 60%;
`;

export default ({ currentCoords, dispatch }) => {
  const { mapRef, routeControl } = useSetMap(currentCoords);
  useHandleRoute(routeControl, currentCoords, dispatch);

  return <Map ref={mapRef} />;
};
