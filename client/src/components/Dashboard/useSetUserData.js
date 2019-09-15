import { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { AuthContext } from "../../context/AuthContext";
import { setUserData } from "../../utils/actions";
import jwt_decode from "jwt-decode";

export default () => {
  const { userStore, dispatch } = useContext(UserContext);
  const { store } = useContext(AuthContext);

  const localToken = window.localStorage.getItem("token");
  const token = localToken || store.token;
  console.log(store);

  useEffect(() => {
    if (token) {
      const { id, name } = jwt_decode(token);
      dispatch(setUserData({ id, name }));
    }
  }, [token]);
  return { userStore };
};
