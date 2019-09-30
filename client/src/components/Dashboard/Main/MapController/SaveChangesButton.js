import React from "react";
import styled from "styled-components";
import MainActionButton from "../../../shared/MainActionButton";
import { setRidesData, updateRide } from "../../../../utils/actions";

const SaveChangesButton = styled(MainActionButton)`
  width: 140px;
`;

export default ({ dispatch, routeStore }) => {
  const { createMode, currentRoute } = routeStore;

  function handleClick() {
    !createMode && dispatch(updateRide(currentRoute));
    //here should go the api call to save ride in db
    createMode && dispatch(setRidesData(currentRoute));
  }

  return (
    <SaveChangesButton onClick={handleClick}>Save changes</SaveChangesButton>
  );
};
