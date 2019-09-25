import React, { createContext, useReducer, useMemo } from "react";

export const RidesContext = createContext();
const initialState = {
  createMode: true,
  currentCoords: [],
  currentRoute: {
    title: "",
    waypoints: [],
    totalDistance: null,
    totalTime: null
  },
  rides: []
};

const reducer = (state, action) => {
  const { currentRoute, rides } = state;

  switch (action.type) {
    case "SET_RIDES_DATA":
      return {
        ...state,
        rides: action.payload
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
    case "SET_ROUTE_TITLE":
      return {
        ...state,
        currentRoute: {
          ...currentRoute,
          title: action.payload
        }
      };
    case "SET_ROUTE_EVENT":
      return {
        ...state,
        currentRoute: {
          ...currentRoute,
          waypoints: action.payload.waypoints,
          totalDistance: action.payload.totalDistance,
          totalTime: action.payload.totalTime
        }
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
