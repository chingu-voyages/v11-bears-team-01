import React from "react";
import styled from "styled-components";
//custom hooks
import useFetchUserData from "./useFetchUserData";
import useSetCurrentRoute from "./useSetCurrentRoute";
import useToggleSidebar from "../../utils/useOpenMenu";
//components
import Header from "./Header/index";
import Sidebar from "./Sidebar/index";
import Main from "./Main/index";
import Footer from "./Footer/index";

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  /* min-height: 100vh; */
  top: 4em;
  right: 0;
`;

export default () => {
  const { userStore, ridesDispatch, loading } = useFetchUserData();
  const props = useSetCurrentRoute();
  const { openMenu, handleOpenMenu } = useToggleSidebar();

  return (
    <React.Fragment>
      <Header
        user={userStore.user}
        toggleSidebar={handleOpenMenu}
        sidebarOpen={openMenu}
        ridesDispatch={ridesDispatch}
      />
      <Content>
        <Sidebar
          {...props}
          sidebarOpen={openMenu}
          toggleSidebar={handleOpenMenu}
          dataLoading={loading}
        />
        <Main {...props} />
      </Content>
      <Footer />
    </React.Fragment>
  );
};
