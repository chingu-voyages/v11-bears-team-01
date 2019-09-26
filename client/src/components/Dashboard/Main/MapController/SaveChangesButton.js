import React from "react";
import styled from "styled-components";
import MainActionButton from "../../../shared/MainActionButton";

const SaveChangesButton = styled(MainActionButton)`
  width: 140px;
`;

export default () => {
  return <SaveChangesButton>Save changes</SaveChangesButton>;
};
