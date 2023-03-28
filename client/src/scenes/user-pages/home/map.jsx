import React, { useState, useEffect } from "react";

const Map = () => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // create map object
    const mapOptions = {
      center: { lat: 40.712776, lng: -74.005974 },
      zoom: 12,
    };
    const newMap = new window.google.maps.Map(document.getElementById("map"), mapOptions);
    setMap(newMap);
  }, []);

  return (
    <div
      id="map"
      style={{ height: "100px", width: "90%" }}
    ></div>
  );
};

export default Map;
