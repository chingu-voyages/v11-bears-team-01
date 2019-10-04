import React from "react";
import styled from "styled-components";
import MainActionButton from "../../../shared/MainActionButton";
import {
  setRidesData,
  updateRide,
  setCreateModeOff
} from "../../../../utils/actions";

const SaveChangesButton = styled(MainActionButton)`
  min-width: 170px;
  width: 190px;
  margin: 0;
`;

export default ({ dispatch, routeStore, routeDispatch }) => {
  const { createMode, currentRoute } = routeStore;

  function handleClick() {
    if (!createMode) {
      dispatch(updateRide(currentRoute));
      routeDispatch(setCreateModeOff());
    } else {
      dispatch(setRidesData(currentRoute));
      routeDispatch(setCreateModeOff());
    }
    //here should go the api call to save ride in db
  }

  return (
    <SaveChangesButton onClick={handleClick}>Save changes</SaveChangesButton>
  );
};
