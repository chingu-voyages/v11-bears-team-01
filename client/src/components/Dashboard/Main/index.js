import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { RidesContext } from "../../../context/RidesContext";
import { usePosition } from "use-position";
import useSetCurrentRoute from "./useSetCurrentRoute";
import { setCoords } from "../../../utils/actions";
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

export default () => {
  const { store, dispatch } = useContext(RidesContext);
  const { currentCoords } = store;
  const { currentRoute, routeDispatch } = useSetCurrentRoute();
  const { latitude: lat, longitude: lng, error } = usePosition(false, config);

  useEffect(() => {
    !error && lat && dispatch(setCoords([lat, lng]));
  }, [lat]);

  return (
    <Main>
      <MapContainer>
        {currentCoords.length > 0 && <Map {...{ store, routeDispatch }} />}
      </MapContainer>
      <MapController {...{ dispatch, currentRoute, store }} />
    </Main>
  );
};
