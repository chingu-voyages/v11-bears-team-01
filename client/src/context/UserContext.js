import React, { createContext, useReducer, useMemo } from "react";

export const UserContext = createContext();

const initialState = {
  user: { id: "", name: "" },
  rides: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "USER_DATA":
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          name: action.payload.name
        }
      };
    case "SET_RIDES_DATA":
      return {
        ...state,
        rides: action.payload
      };
    default:
      return state;
  }
};
export const UserProvider = props => {
  const [userStore, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return { userStore, dispatch };
  }, [userStore]);

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};
