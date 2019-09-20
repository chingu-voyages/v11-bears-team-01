import { useEffect, useState } from "react";
import "leaflet-routing-machine";

export default (routeControl = {}) => {
  const [route, setRoute] = useState({});
  useEffect(() => {
    function setRouteData(e) {
      const { waypoints, routes } = e;
      setRoute({ waypoints, routes });
    }
    routeControl.current.addEventListener("routesfound", setRouteData);
  }, [routeControl]);
  return { route };
};
