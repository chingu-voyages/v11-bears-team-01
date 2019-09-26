import React, { createContext, useReducer, useMemo } from "react";

export const RidesContext = createContext();
const initialState = {
  createMode: true,
  currentCoords: [],
  rides: [
    {
      _id: "v9382h9",
      title: "Route 1",
      waypoints: [[35, 0], [12, 23]]
    },
    {
      _id: "ow8uh598",
      title: "Route 2",
      waypoints: [[23, 12], [35, 22]]
    }
  ]
};

const reducer = (state, action) => {
  const { rides } = state;

  switch (action.type) {
    case "SET_RIDES_DATA":
      return {
        ...state,
        rides: [...rides, ...action.payload]
      };
    case "CREATE_MODE":
      return {
        ...state,
        createMode: action.payload
      };
    case "SET_COORDS":
      return {
        ...state,
        currentCoords: action.payload
      };
    default:
      return state;
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
