import React from "react";
import styled from "styled-components";
import { setCoords, setCreateMode } from "../../../utils/actions";
import MainActionButton from "../../shared/MainActionButton";
import { usePosition } from "use-position";

const CreateButton = styled(MainActionButton)`
  min-width: 220px;
`;

export default ({ dispatch }) => {
  const { latitude: lat, longitude: lng, error } = usePosition(false);

  function handleClick() {
    if (!error) {
      dispatch(setCoords([lat, lng]));
      dispatch(setCreateMode(true));
    }
  }
  return <CreateButton onClick={handleClick}>Create new ride</CreateButton>;
};
