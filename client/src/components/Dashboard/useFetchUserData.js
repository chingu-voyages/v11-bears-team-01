import { useContext, useEffect } from "react";
import { setRidesData } from "../../utils/actions";
import { UserContext } from "../../context/UserContext";
import { RidesContext } from "../../context/RidesContext";
import { AuthContext } from "../../context/AuthContext";
import { setUserData } from "../../utils/actions";
import jwt_decode from "jwt-decode";
import axios from "axios";

export default () => {
  const { userStore, userDispatch } = useContext(UserContext);
  const { dispatch: ridesDispatch } = useContext(RidesContext);
  const { store } = useContext(AuthContext);

  const localToken = window.localStorage.getItem("token");
  const token = localToken || store.token;
  
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
      const { id, name } = jwt_decode(token);
      userDispatch(setUserData({ id, name }));
      //fetching user's rides
      axios
        .get("/api/rides")
        .then(res => {
          if (res.data.length > 0) {
            ridesDispatch(setRidesData(res.data));
          }
        })
        .catch(err => console.log(err));
    }
  }, [token]);
  return { userStore, ridesDispatch };
};
