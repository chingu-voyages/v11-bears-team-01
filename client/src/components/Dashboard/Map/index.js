import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet-routing-machine";

const style = {
  width: "100%",
  height: "100%"
};

export default ({ coords }) => {
  //create map
  const mapRef = useRef();
  useEffect(() => {
    const [lat, lng] = coords;
    console.log(lat, lng);
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
    L.Routing.control({
      waypoints: [L.latLng(lat, lng), L.latLng(lat + 15, lng + 32)],
      routeWhileDragging: true,
      position: "bottomleft"
    }).addTo(mapRef.current);

    //disabling pane manually
    mapRef.current._controlContainer.style.display = "none";
  }, []);

  //create marker
  const markerRef = useRef(null);
  useEffect(() => {
    markerRef.current = L.marker(coords).addTo(mapRef.current);
  }, [coords]);

  return <div ref={mapRef} style={style} />;
};
