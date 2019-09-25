import React from "react";
import styled from "styled-components";
import useSetMap from "./useSetMap";
import useSetRoute from "./useSetRoute";
import useHandleRoute from "./useHandleRoute";

const Map = styled.div`
  width: 100%;
  height: 60%;
`;

export default ({ coords }) => {
  const { mapRef } = useSetMap(coords);
  const { routeControl } = useSetRoute(coords, mapRef);
  const { route } = useHandleRoute(routeControl);
  console.log(route);

  return <Map ref={mapRef} />;
};
