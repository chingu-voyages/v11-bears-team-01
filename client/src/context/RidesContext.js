import React, { createContext, useReducer, useMemo } from "react";

export const RidesContext = createContext();
const initialState = [
  {
    _id: "v9382h9",
    title: "Route 1",
    waypoints: [[35, 0], [12, 23]],
    totalDistance: 0,
    totalTime: 0
  },
  {
    _id: "ow8uh598",
    title: "Route 2",
    waypoints: [[23, 12], [35, 22]],
    totalDistance: 0,
    totalTime: 0
  }
];

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_RIDES_DATA":
      return [...state, action.payload];
    case "UPDATE_RIDE": {
      const i = state.findIndex(ride => ride._id === action.payload._id);
      state.splice(i, 1, action.payload);
      return state;
    }
    default:
      return state;
  }
};

export const RidesProvider = props => {
  const [rides, dispatch] = useReducer(reducer, initialState);
  const value = useMemo(() => {
    return { rides, dispatch };
  }, [rides]);

  return (
    <RidesContext.Provider value={value}>
      {props.children}
    </RidesContext.Provider>
  );
};
