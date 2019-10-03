import React, { useState } from "react";
import styled from "styled-components";
import SaveChangesButton from "./SaveChangesButton";
import PopUpMenu from "./PopUpMenu";
import Title from "./Title";

const Container = styled.div`
  display: flex;
  width: 96%;
  height: 40%;
  padding: 1em;
`;
const ButtonsWrapper = styled.div`
  position: relative;
  flex: 0 1 25%;
  display: flex;
  justify-content: flex-end;
`;
const MainWrapper = styled.div`
  flex: 0 1 75%;
`;

export default props => {
  const { routeStore, routeDispatch } = props;
  const [title, setTitle] = useState(routeStore.currentRoute.title);

  return (
    <Container>
      <MainWrapper>
        <Title {...{ routeDispatch, routeStore, title, setTitle }} />
      </MainWrapper>
      <ButtonsWrapper>
        <SaveChangesButton {...props} {...{ routeDispatch }} />
        <PopUpMenu {...props} />
      </ButtonsWrapper>
    </Container>
  );
};
