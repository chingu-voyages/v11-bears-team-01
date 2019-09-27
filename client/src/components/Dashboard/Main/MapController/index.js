import React from "react";
import styled from "styled-components";
import SaveChangesButton from "./SaveChangesButton";

const Container = styled.div`
  display: flex;
  /* justify-content: space-around; */
  width: 100%;
  height: 40%;
`;

export default props => {
  return (
    <React.Fragment>
      <Container>
        <SaveChangesButton {...props} />
      </Container>
    </React.Fragment>
  );
};
