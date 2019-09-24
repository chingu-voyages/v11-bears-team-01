import { useEffect, useRef } from "react";
import L from "leaflet";

export default (coords = []) => {
  const mapRef = useRef();
  const routeControl = useRef();

  useEffect(() => {
    //map mounting
    mapRef.current = L.map(mapRef.current, {
      center: coords,
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
    //route mounting
    routeControl.current = L.Routing.control({
      waypoints: [L.latLng(coords), L.latLng(coords)],
      routeWhileDragging: true,
      routeDragInterval: 0
    }).addTo(mapRef.current);
  }, []);

  return { mapRef, routeControl };
};
