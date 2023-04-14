import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const LandingPage = () => {
  const [userLocation, setUserLocation] = useState({lat: 0, lng: 0});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({lat: position.coords.latitude, lng: position.coords.longitude});
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'YOUR_API_KEY' }}
        defaultCenter={userLocation}
        defaultZoom={11}
      >
        <AnyReactComponent
          lat={userLocation.lat}
          lng={userLocation.lng}
          text="Your Location"
        />
      </GoogleMapReact>
    </div>
  );
};

export default LandingPage;
