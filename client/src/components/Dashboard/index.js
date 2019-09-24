import React from "react";
import { RidesProvider } from "../../context/RidesContext";
import styled from "styled-components";
//custom hooks
import useFetchUserData from "./useFetchUserData";
//components
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import Main from "./Main/index";
import Footer from "./Footer/index";

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
  top: 4em;
  right: 0;
`;

export default () => {
  const { userStore } = useFetchUserData();

  return (
    <React.Fragment>
      <Header user={userStore.user} />
      <RidesProvider>
        <Content>
          <Sidebar />
          <Main />
        </Content>
      </RidesProvider>
      <Footer />
    </React.Fragment>
  );
};
