import React from "react";
import Header from "./Header/index";
import useSetUserData from "./useSetUserData";
import Main from "./Main/index";
import styled from "styled-components";

const Layout = styled.div``;

export default () => {
  const { userStore } = useSetUserData();

  return (
    <div>
      <Header user={userStore.user} />
      <Main />
    </div>
  );
};
