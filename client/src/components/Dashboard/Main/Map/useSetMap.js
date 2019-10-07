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
    let geocoder = L.Control.Geocoder.nominatim();

    routeControl.current = L.Routing.control({
      waypoints: coords,
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

//nominatim options, this doesnt work
// {
//   htmlTemplate: function(r) {
//     let a = r.address;
//     const text = L.DomUtil.create(
//       "p",
//       "leaflet-control-geocoder-address-detail"
//     );
//     console.log(text);
//     text.innerHTML = `${a.suburb}`;
//     let string =
//       "<span class='leaflet-routing-geocoder'>Suburb: {suburb}</span>";
//     const templatedStr = L.Util.template(string, { suburb: a.suburb });
//     console.log(templatedStr);
//     return templatedStr;
//   }
// }
