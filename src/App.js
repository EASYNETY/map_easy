// src/App.js
import React, { Component } from "react";
import GoogleMap from "google-map-react";

const mapStyles = {
  width: "100%",
  height: "100%"
};

const markerStyle = {
  height: "50px",
  width: "50px",
  marginTop: "-50px"
};

const imgStyle = {
  height: "100%"
};

const MapMarker = ({ title }) => (
  <div style={markerStyle}>
    <img
      style={imgStyle}
      src="https://res.cloudinary.com/og-tech/image/upload/s--OpSJXuvZ--/v1545236805/map-marker_hfipes.png"
      alt={title}
    />
    <h3>{title}</h3>
  </div>
);

export const App = () => {
  const componentDidMount = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  };

  return (
    <div>
      <GoogleMap
        style={mapStyles}
        bootstrapURLKeys={{ key: "AIzaSyCLHujY9iwbi2UV5dXz1OFRFCICsSK33zQ" }}
        center={{ lat: 6.5244, lng: 3.3792 }}
        zoom={14}
      >
        <MapMarker
          title={"Easy Locator"}
          lat={componentDidMount.latitude}
          lng={componentDidMount.longitude}
        ></MapMarker>
      </GoogleMap>
    </div>
  );
};

export default App;
