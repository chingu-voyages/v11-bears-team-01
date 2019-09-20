import React, { useState } from "react";
import Header from "./Header/index";
import useFetchUserData from "./useFetchUserData";
import Sidebar from "./Sidebar/index";
import Main from "./Main/index";
import Footer from "./Footer/index";
import styled from "styled-components";

const Layout = styled.div``;

export default () => {
  const [createMode, setCreateMode] = useState(true);
  const { userStore } = useFetchUserData();

  return (
    <Layout>
      <Header user={userStore.user} />
      <Sidebar {...{ setCreateMode }} />
      <Main {...{ createMode }} />
      <Footer />
    </Layout>
  );
};
