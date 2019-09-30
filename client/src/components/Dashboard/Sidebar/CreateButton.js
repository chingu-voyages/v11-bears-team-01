import React from "react";
import styled from "styled-components";
import { createNewRoute } from "../../../utils/actions";
import MainActionButton from "../../shared/MainActionButton";
import { usePosition } from "use-position";

const CreateButton = styled(MainActionButton)`
  min-width: 220px;
`;

export default ({ routeDispatch, setCoords }) => {
  const { latitude: lat, longitude: lng, error } = usePosition(false);

  function handleClick() {
    if (!error && lat) {
      setCoords([lat, lng]);
      routeDispatch(createNewRoute([lat, lng]));
    }
  }
  return <CreateButton onClick={handleClick}>Create new ride</CreateButton>;
};
