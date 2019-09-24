import React, { createContext, useReducer, useMemo } from "react";

export const RidesContext = createContext();
const initialState = {
  createModeOn: true,
  currentCoords: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "RIDE_CREATION":
      return {
        ...state,
        createModeOn: action.payload
      };
    case "SET_COORDS":
      return {
        ...state,
        currentCoords: action.payload
      };
  }
};

export const RidesProvider = props => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return { store, dispatch };
  }, [store]);

  return (
    <RidesContext.Provider value={value}>
      {props.children}
    </RidesContext.Provider>
  );
};
