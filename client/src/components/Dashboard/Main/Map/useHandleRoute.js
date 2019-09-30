import { useEffect } from "react";
import "leaflet-routing-machine";
import { updateNewRoute, setRecordedRoute } from "../../../../utils/actions";

function stringGen(yourNumber) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < yourNumber; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function filterRouteEventObj(wps, routes, createMode) {
  const waypoints = Object.values(wps).map(wp => [
    wp.latLng.lat,
    wp.latLng.lng
  ]);
  const totalTime = routes[0].summary.totalTime;
  const totalDistance = routes[0].summary.totalDistance;

  const newRideObj = { _id: stringGen(7), waypoints, totalDistance, totalTime };
  const updateRideObj = { waypoints, totalDistance, totalTime };
  const routeObj = createMode ? newRideObj : updateRideObj;
  //this in the future will be just one obj since we don't need to pass _id from here
  // for new route.
  return routeObj;
}

export default (routeControl, routeStore, routeDispatch, coords) => {
  const { createMode } = routeStore;
  const wps = createMode ? [coords, coords] : coords;

  useEffect(() => {
    routeControl.current.setWaypoints(wps);

    function setRouteData(e) {
      const { waypoints, routes } = e;
      const routeData = filterRouteEventObj(waypoints, routes, createMode);
      createMode && routeDispatch(updateNewRoute(routeData));
      !createMode && routeDispatch(setRecordedRoute(routeData));
    }

    routeControl.current.addEventListener("routesfound", setRouteData);
    return () =>
      routeControl.current.removeEventListener("routesfound", setRouteData);
  }, [coords]);
};
