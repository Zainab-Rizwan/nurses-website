import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box, styled, useMediaQuery } from '@mui/material';
import 'leaflet/dist/leaflet.css'; // import leaflet CSS
import './index.scss';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: "https://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|abcdef&chf=a,s,ee00FFFF",
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
}));

const bounds = [[25.82, -124.39], [49.38, -66.94]]; 

function Map() {
  const isTabletScreens = useMediaQuery("(min-width: 508px)");
  const isDesktopScreens = useMediaQuery("(min-width: 1050px)");

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
    <CustomBox sx={{marginTop: isDesktopScreens ? "2rem": isTabletScreens ? "1.5rem" : "2rem" }}>
    <div className="map-container">
      <MapContainer center={[37.0902, -95.7129]} zoom={6} maxBounds={bounds} maxBoundsViscosity={1.0} keyboard={false}>
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
