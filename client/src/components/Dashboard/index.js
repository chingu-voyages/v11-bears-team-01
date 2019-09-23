import React, { useState, useEffect } from "react";
import styled from "styled-components";
//custom hooks
import useFetchUserData from "./useFetchUserData";
import { usePosition } from "use-position";
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
const config = {
  enableHighAccuracy: true
};

export default () => {
  const [createModeOn, setCreateModeOn] = useState(true);
  const [currentCoords, setCurrentCoords] = useState([]);
  const { userStore } = useFetchUserData();
  const { latitude: lat, longitude: lng, error } = usePosition(false);

  useEffect(() => {
    if (createModeOn) {
      !error && lat && setCurrentCoords([lat, lng]);
    }
  }, [lat, lng, createModeOn]);

  return (
    <React.Fragment>
      <Header user={userStore.user} />
      <Content>
        <Sidebar {...{ setCurrentCoords, setCreateModeOn }} />
        <Main {...{ currentCoords }} />
      </Content>
      <Footer />
    </React.Fragment>
  );
};
