import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-control-geocoder";

export default () => {
  const mapRef = useRef();
  const routeControl = useRef();

  useEffect(() => {
    //map mounting
    mapRef.current = L.map(mapRef.current, {
      center: [0, 0],
      zoom: 1,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    //route mounting
    let geocoder = L.Control.Geocoder.nominatim();

    routeControl.current = L.Routing.control({
      routeWhileDragging: false,
      routeDragInterval: 0,
      router: L.Routing.mapbox(process.env.REACT_APP_MAPBOX_TOKEN),
      plan: L.Routing.plan([], {
        geocoder: geocoder,
        geocodersClassName: "geocoders-container",
        reverseWaypoints: true,
        addButtonClassName: "add-waypoint-btn"
      })
    }).addTo(mapRef.current);
  }, []);

  return { mapRef, routeControl };
};
