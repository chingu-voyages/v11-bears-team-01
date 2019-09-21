import React from "react";
import styled from "styled-components";
import MainActionButton from "../../shared/MainActionButton";

const CreateButton = styled(MainActionButton)`
  min-width: 220px;
`;

export default () => {
  function handleClick() {
    console.log("new ride click");
  }
  return <CreateButton onClick={handleClick}>Create new ride</CreateButton>;
};
