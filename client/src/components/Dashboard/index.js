import React from "react";
import styled from "styled-components";
import Header from "./Header/index";
import useSetUserData from "./useSetUserData";

const Main = styled.main``;

export default () => {
  const { userStore } = useSetUserData();

  return (
    <React.Fragment>
      <Header user={userStore.user} />
      <Main />
    </React.Fragment>
  );
};
