import React, { useState } from "react";
import styled from "styled-components";
import SaveChangesButton from "./SaveChangesButton";
import PopUpMenu from "./PopUpMenu";
import Title from "./Title";
import Stats from "./Stats";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 96%;
  max-height: 40%;
  padding: 1.5em 0;
`;
const ButtonsWrapper = styled.div`
  position: relative;
  flex: 0 1;
  display: flex;
  justify-content: flex-end;
`;
const RouteCard = styled.div`
  flex: 0 1 50%;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.03);
  padding: 20px;
  height: auto;
  min-height: 90px;
`;

export default props => {
  const { routeStore, routeDispatch } = props;
  const [title, setTitle] = useState(routeStore.currentRoute.title);

  return (
    <Container>
      <RouteCard>
        <Title {...{ routeDispatch, routeStore, title, setTitle }} />
        <Stats {...routeStore.currentRoute} />
      </RouteCard>
      <ButtonsWrapper>
        <SaveChangesButton {...props} {...{ routeDispatch }} />
        <PopUpMenu {...props} />
      </ButtonsWrapper>
    </Container>
  );
};
