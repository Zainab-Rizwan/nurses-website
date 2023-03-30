import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, styled } from '@mui/material';
import 'leaflet/dist/leaflet.css'; // import leaflet CSS
import './map.scss';
import L from 'leaflet';
import LocationOnIcon from '@mui/icons-material/LocationOn';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: 0,
}));

const bounds = [[25.82, -124.39], [49.38, -66.94]]; 

function Map() {
  const facilities = [
    {
      name: 'Facility 1',
      text: 'Lorem Ipsum Dolor',
      location: [37.0902, -95.7129],
    },
    {
      name: 'Facility 2',
      text: 'Lorem Ipsum Dolor',
      location: [40.721821, -73.99321],
    },
  ];

  return (
    <CustomBox>
    <div className="map-container">
      <MapContainer center={[37.0902, -95.7129]} zoom={6} scrollWheelZoom={true} maxBounds={bounds} maxBoundsViscosity={1.0}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {facilities.map((facility, index) => (
          <Marker key={index} position={facility.location}>
            <Popup>{facility.name} - {facility.text}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
    </CustomBox>
  );
}

export default Map;
