import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";

export default (routeControl = {}, currentCoords, setRoute) => {
  useEffect(() => {
    routeControl.current.setWaypoints([
      L.latLng(currentCoords),
      L.latLng(currentCoords)
    ]);
    function setRouteData(e) {
      const { waypoints, routes } = e;
      setRoute({ waypoints, routes });
    }
    routeControl.current.addEventListener("routesfound", setRouteData);
    return () =>
      routeControl.current.removeEventListener("routesfound", setRouteData);
  }, [currentCoords]);
};
