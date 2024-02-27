// components/LocationPicker.js
import { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

export default function LocationPicker({apiKey}){
  const [position, setPosition] = useState(null);

  const handleMapClick = (e) => {
    setPosition({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        center={{ lat: 0, lng: 0 }} // Default center
        zoom={8} // Initial zoom level
        onClick={handleMapClick}
      >
        {position && <Marker position={position} />}
      </GoogleMap>
    </LoadScript>
  );
};
