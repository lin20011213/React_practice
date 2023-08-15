import React from 'react'
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class MyMapComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 25.03520,
      lng: 121.564517,
      zoom: 17,
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <MapContainer center={position} zoom={this.state.zoom} style={{ height: "100vh", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    );
  }
}

export default MyMapComponent;
