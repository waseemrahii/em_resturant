import React from 'react';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const Map = ({ location }) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Use the environment variable

  return (
    <div className="flex justify-center items-center h-[70vh] bg-gray-100">
      <LoadScript googleMapsApiKey={apiKey}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={location}
          zoom={10}
          className="rounded-lg shadow-lg"
        >
          <Marker position={location} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;