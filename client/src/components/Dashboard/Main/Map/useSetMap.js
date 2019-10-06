import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-control-geocoder";

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
      waypoints: coords,
      routeWhileDragging: false,
      routeDragInterval: 0,
      router: L.Routing.mapbox(process.env.REACT_APP_MAPBOX_TOKEN),
      plan: L.Routing.plan([], {
        geocoder: L.Control.Geocoder.nominatim(),
        geocodersClassName: "geocoders-container",
        reverseWaypoints: true
      })
    }).addTo(mapRef.current);
  }, []);

  return { mapRef, routeControl };
};
