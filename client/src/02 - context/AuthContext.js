import { createContext, useMemo } from "react";

export const AuthContext = createContext();

const initialState = {
  //add state here
};

const reducer = (state, action) => {
  switch (action.type) {
    //add cases here
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
