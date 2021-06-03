import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

const Map = props => {
  return (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{
        lat: 1.4680846985682943,
        lng: 124.83303814590593
      }}
    >
      <Marker position={{ lat: 1.4680846985682943, lng: 124.83303814590593 }} />
    </GoogleMap>
  );
}

export default withScriptjs(withGoogleMap(Map));