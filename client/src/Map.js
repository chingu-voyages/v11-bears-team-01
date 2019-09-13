import React from "react";
import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";

class Map extends React.Component {
  constructor() {
    super();
    this.state = {
      rides: [[]]
    };
  }

  // Loading the Rides
  componentDidMount() {
    fetch("http://localhost:8888/api/rides")
      .then(res => res.json())
      .then(data =>
        this.setState({ rides: data }, () => {
          console.log(this.state.rides);
        })
      );
  }

  render() {
    return (
      <LeafletMap
        center={[18.8170984, -70.6484397]}
        zoom={7}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Marker position={[50, 10]}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>
        <Polyline
          color="lime"
          positions={[
            [-71.2353515625, 19.84939395842279],
            [-70.9716796875, 19.611543503814232],
            [-70.8233642578125, 19.53390722018251],
            [-70.3619384765625, 19.036156118717336],
            [-70.1092529296875, 18.734704192913256],
            [-69.840087890625, 18.578568865536027],
            [-69.60937499999999, 18.490028573953296]
          ]}
        />
      </LeafletMap>
    );
  }
}

export default Map;
