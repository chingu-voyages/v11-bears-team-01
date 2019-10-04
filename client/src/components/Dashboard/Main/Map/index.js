import React from "react";
import styled from "styled-components";
import useSetMap from "./useSetMap";
import useHandleRoute from "./useHandleRoute";

const Map = styled.div`
  width: 100%;
  height: 100%;
`;

export default ({ routeStore, routeDispatch, coords }) => {
  const { currentRoute } = routeStore;
  const { mapRef, routeControl } = useSetMap(coords);
  useHandleRoute(routeControl, routeStore, routeDispatch, coords);

  return <Map ref={mapRef} />;
};
