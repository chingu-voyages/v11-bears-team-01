import React, { useState } from "react";
import styled from "styled-components";
import Ul from "../../../shared/Ul";
import ListButton from "../../../shared/ListButton";
import { DotsVerticalRounded } from "styled-icons/boxicons-regular/DotsVerticalRounded";
import { Trash } from "styled-icons/boxicons-regular/Trash";
import { deleteRide, createNewRoute } from "../../../../utils/actions";

const PopUpMenuItem = styled(ListButton)`
  width: 170px;
  font-size: 12px;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  cursor: ${props => (props.disabled ? "not-allowed" : "pointer")};
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
  color: rgba(19, 30, 65, 0.8);
`;
const Container = styled.div`
  height: fit-content;
  position: relative;
`;

export default ({ dispatch, routeStore, routeDispatch }) => {
  const [open, setOpen] = useState(false);
  const { createMode } = routeStore;

  function handleDelete() {
    if (!createMode) {
      dispatch(deleteRide(routeStore.currentRoute));
      routeDispatch(createNewRoute());
      setOpen(false);
    }
    //set route to create new route
  }

  return (
    <Container>
      <Dots size={"30px"} onClick={() => setOpen(!open)} />
      {open && (
        <PopUpMenu>
          <PopUpMenuItem
            onClick={handleDelete}
            disabled={createMode ? true : false}
          >
            <Trash size={"15px"} style={{ marginRight: "5px" }} />
            Delete route
          </PopUpMenuItem>
        </PopUpMenu>
      )}
    </Container>
  );
};
