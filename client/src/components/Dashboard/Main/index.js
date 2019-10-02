import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { RidesContext } from "../../../context/RidesContext";
import { usePosition } from "use-position";
import Map from "./Map/index";
import MapController from "./MapController/index";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  flex: 0 1 80%;
`;
const MapContainer = styled.div`
  width: 100%;
  height: 60%;
`;
const config = {
  enableHighAccuracy: true
};

export default ({ routeStore, routeDispatch, setCoords, coords }) => {
  const { dispatch } = useContext(RidesContext);
  //hook that calculates user's current position
  const { latitude: lat, longitude: lng, error } = usePosition(false, config);

  useEffect(() => {
    //setting the coords to user's current position
    !error && lat && setCoords([lat, lng]);
  }, [lat]);

  return (
    <Main>
      <MapContainer>
        {coords.length > 0 && (
          <Map {...{ routeStore, routeDispatch, coords }} />
        )}
      </MapContainer>
      <MapController {...{ dispatch, routeStore, routeDispatch }} />
    </Main>
  );
};
