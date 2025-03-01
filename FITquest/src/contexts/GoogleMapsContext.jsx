import React, { createContext, useState, useContext } from 'react';
import { LoadScript } from '@react-google-maps/api';

const GoogleMapsContext = createContext(null);

export const useGoogleMaps = () => useContext(GoogleMapsContext);

export const GoogleMapsProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);

  return (
    <GoogleMapsContext.Provider value={{ isLoaded, loadError }}>
      <LoadScript
        googleMapsApiKey="AIzaSyCEt6aV_KOJqakf1TldZZShy74mgDwPMYE"
        onLoad={() => setIsLoaded(true)}
        onError={(error) => setLoadError(error)}
      >
        {children}
      </LoadScript>
    </GoogleMapsContext.Provider>
  );
};
