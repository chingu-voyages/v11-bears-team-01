import { useEffect } from "react";
import "leaflet-routing-machine";
import { setRouteEvent } from "../../../../utils/actions";

function filterRouteEventObj(wps, routes) {
  const waypoints = Object.values(wps).map(wp => [
    wp.latLng.lat,
    wp.latLng.lng
  ]);
  const totalTime = routes[0].summary.totalTime;
  const totalDistance = routes[0].summary.totalDistance;

  return {
    waypoints,
    totalDistance,
    totalTime
  };
}

export default (routeControl = {}, store, dispatch) => {
  const { currentCoords, createMode } = store;
  const wps = createMode ? [currentCoords, currentCoords] : currentCoords;

  useEffect(() => {
    routeControl.current.setWaypoints(wps);

    function setRouteData(e) {
      const { waypoints, routes } = e;
      const routeData = filterRouteEventObj(waypoints, routes);
      dispatch(setRouteEvent(routeData));
    }

    routeControl.current.addEventListener("routesfound", setRouteData);
    return () =>
      routeControl.current.removeEventListener("routesfound", setRouteData);
  }, [currentCoords]);
};

//only problem here is that whenever routesfound event is triggered
//there's a dispatch to context, may bring some perf problems.
