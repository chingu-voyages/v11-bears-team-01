import React, { createContext, useMemo, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  loading: false,
  signUpErrors: {},
  signInErrors: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: action.payload
      };
    case "SIGN_UP_ERRORS":
      return {
        ...state,
        signUpErrors: action.payload
      };
    case "SIGN_IN_ERRORS":
      return {
        ...state,
        signInErrors: action.payload
      };
    case "REGISTRATION_OK":
      //just cleans up the errors object if the registration is ok
      return {
        ...state,
        signUpErrors: {}
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
