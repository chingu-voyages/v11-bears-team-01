import React, { createContext, useMemo, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  loading: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export function AuthProvider(props) {
  const [store, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return {
      store,
      dispatch
    };
  }, [store]);

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
}
