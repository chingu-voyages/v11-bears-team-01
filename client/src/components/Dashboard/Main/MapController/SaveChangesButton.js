import React from "react";
import styled from "styled-components";
import MainActionButton from "../../../shared/MainActionButton";
import { setRidesData, updateRide } from "../../../../utils/actions";

const SaveChangesButton = styled(MainActionButton)`
  width: 140px;
`;

export default ({ dispatch, currentRoute, store }) => {
  const { createMode } = store;
  console.log(currentRoute);
  function handleClick() {
    !createMode && dispatch(updateRide(currentRoute))
    //here should go the api call to save ride in db
    createMode && dispatch(setRidesData(currentRoute));
  }
  return (
    <SaveChangesButton onClick={handleClick}>Save changes</SaveChangesButton>
  );
};

//Should also add some logic to distinguish whether it's a new ride
//it's been created or it's an already registered ride we're editing,
//so that when you save changes you don't duplicate the ride and you actually
//update the old values in db.
