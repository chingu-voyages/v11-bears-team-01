import { useReducer } from "react";

function stringGen(yourNumber) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < yourNumber; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
const initialState = {
  _id: "",
  title: "Untitled",
  waypoints: [],
  totalDistance: 0,
  totalTime: 0
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
        _id: stringGen(7),
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
