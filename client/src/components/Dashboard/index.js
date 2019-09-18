import React from "react";
import Header from "./Header/index";
import useSetUserData from "./useSetUserData";
import Main from "./Main/index";

export default () => {
  const { userStore } = useSetUserData();

  return (
    <React.Fragment>
      <Header user={userStore.user} />
      <Main />
    </React.Fragment>
  );
};
