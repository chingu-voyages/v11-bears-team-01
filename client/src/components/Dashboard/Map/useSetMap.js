import { useEffect, useRef } from "react";
import L from "leaflet";

export default (coords = []) => {
  const mapRef = useRef();

  useEffect(() => {
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
  }, []);

  return { mapRef };
};
