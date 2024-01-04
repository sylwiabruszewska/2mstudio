import { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

export const Map = () => {
  const mapStyles = {
    height: '600px',
    width: '100%',
  };

  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const defaultCenter = {
    lat: 53.15134,
    lng: 23.20783,
  };

  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);

  const onLoad = map => {
    setMap(map);
    const newMarker = new window.google.maps.Marker({
      position: defaultCenter,
      map,
    });
    setMarker(newMarker);
  };

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        center={defaultCenter}
        zoom={15}
        onLoad={onLoad}
      >
        {map && marker && <Marker position={defaultCenter} />}
      </GoogleMap>
    </LoadScript>
  );
};
