import React, { useState } from "react";
import styled from "styled-components";
import Ul from "../../../shared/Ul";
import ListButton from "../../../shared/ListButton";
import { DotsVerticalRounded } from "styled-icons/boxicons-regular/DotsVerticalRounded";
import { Trash } from "styled-icons/boxicons-regular/Trash";
import { deleteRide } from "../../../../utils/actions";

const DeleteButton = styled(ListButton)`
  width: 170px;
  font-size: 12px;
`;
const PopUpMenu = styled(Ul)`
  position: absolute;
  background: #fff;
  right: 20px;
  top: 30px;
  border-radius: 2px;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
`;
const Dots = styled(DotsVerticalRounded)`
  cursor: pointer;
  height: 42px;
`;

export default ({ dispatch, routeStore, routeDispatch }) => {
  const [open, setOpen] = useState(false);
  const { createMode } = routeStore;

  function handleDelete() {
    !createMode && dispatch(deleteRide(routeStore.currentRoute));
    //set route to create new route
  }

  return (
    <React.Fragment>
      <Dots size={"30px"} onClick={() => setOpen(!open)} />
      {open && (
        <PopUpMenu>
          <DeleteButton onClick={handleDelete}>
            <Trash size={"15px"} style={{ marginRight: "5px" }} />
            Delete route
          </DeleteButton>
          <DeleteButton>Dropdown item</DeleteButton>
          <DeleteButton>Dropdown item</DeleteButton>
        </PopUpMenu>
      )}
    </React.Fragment>
  );
};
