import { Fragment } from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 33.3074463,
  lng: -111.8236717
};

const position = {
  lat: 33.3074463,
  lng: -111.8236717
};

const options = {
  styles: [{"stylers":[{"hue":"#2c3e50"},{"saturation":250}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":50},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}]
};

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: 'map',
    googleMapsApiKey: 'AIzaSyAC7V0abQBXKVDY9h_JYoILAUTOLBqSZT0'
  });

  return (
    <Fragment>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15.3}
          options={options}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : ''}
    </Fragment>
  );
}

export default Map;