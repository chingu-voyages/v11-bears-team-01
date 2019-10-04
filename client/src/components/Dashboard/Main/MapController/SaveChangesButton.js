import React, { useState } from "react";
import styled from "styled-components";
import { PulseLoader } from "react-spinners";
import { Check } from "styled-icons/boxicons-regular/Check";
import MainActionButton from "../../../shared/MainActionButton";
import {
  setRidesData,
  updateRide,
  setCreateModeOff
} from "../../../../utils/actions";

const SaveChangesButton = styled(MainActionButton)`
  min-width: 170px;
  overflow: hidden;
  width: 190px;
  margin: 0;
  background: ${props => (props.saved ? "#1BDC77" : "")};
  border-color: ${props => (props.saved ? "#1BDC77" : "")};
  transition: all 0.17s ease-out;
`;
const Ok = styled(Check)``;

export default ({ dispatch, routeStore, routeDispatch }) => {
  const { createMode, currentRoute } = routeStore;
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  function handleClick() {
    if (!createMode) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSaved(true);
        dispatch(updateRide(currentRoute));
        routeDispatch(setCreateModeOff());
        setTimeout(() => {
          setSaved(false);
        }, 900);
      }, 400);
    } else {
      setLoading(true);
      setTimeout(() => {
        dispatch(setRidesData(currentRoute));
        routeDispatch(setCreateModeOff());
        setLoading(false);
        setSaved(true);
        setTimeout(() => {
          setSaved(false);
        }, 900);
      }, 400);
    }
    //here should go the api call to save ride in db
  }

  return (
    <SaveChangesButton onClick={handleClick} saved={saved ? true : false}>
      {!loading && !saved && <span>Save changes</span>}
      {loading && <PulseLoader size={8} color={"#ffffff"} loading={loading} />}
      {saved && <Ok size={"32px"} />}
    </SaveChangesButton>
  );
};
