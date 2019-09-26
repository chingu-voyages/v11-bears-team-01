import { useReducer } from "react";

const initialState = {
  title: "Untitled",
  waypoints: [],
  totalDistance: null,
  totalTime: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ROUTE_TITLE":
      return {
        ...state,
        title: action.payload
      };
    case "SET_ROUTE_EVENT":
      return {
        ...state,
        waypoints: action.payload.waypoints,
        totalDistance: action.payload.totalDistance,
        totalTime: action.payload.totalTime
      };
    default:
      return state;
  }
};
export default () => {
  const [currentRoute, routeDispatch] = useReducer(reducer, initialState);

  return { currentRoute, routeDispatch };
};
