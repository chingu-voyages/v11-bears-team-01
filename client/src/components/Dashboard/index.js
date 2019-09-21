import React, { useState } from "react";
import Header from "./Header/index";
import useFetchUserData from "./useFetchUserData";
import Sidebar from "./Sidebar/index";
import Main from "./Main/index";
import Footer from "./Footer/index";
import styled from "styled-components";

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 4em;
  right: 0;
`;

export default () => {
  const [createMode, setCreateMode] = useState(true);
  const { userStore } = useFetchUserData();

  return (
    <React.Fragment>
      <Header user={userStore.user} />
      <Content>
        <Sidebar {...{ setCreateMode }} />
        <Main {...{ createMode }} />
      </Content>
      <Footer />
    </React.Fragment>
  );
};
