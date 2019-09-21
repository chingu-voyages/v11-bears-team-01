import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine";

export default (coords = [], mapRef = {}) => {
  const routeControl = useRef();
  //route setting
  useEffect(() => {
    routeControl.current = L.Routing.control({
      waypoints: [L.latLng(coords), L.latLng(coords)],
      routeWhileDragging: true,
      routeDragInterval: 0
    }).addTo(mapRef.current);
  }, [coords]);
  return { routeControl };
};

//set waypoints
// routeControl.setWaypoints([
//   // L.latLng(initialCoords.current[0], initialCoords.current[1]),
//   L.latLng(coords),
//   L.latLng(coords)
// ]);
