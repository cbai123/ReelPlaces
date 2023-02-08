import { googleKey } from "../api/apiKey";
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};
const position = {
    lat: 37.772,
    lng: -122.214
  }
  
const onLoad = marker => {
    console.log('marker: ', marker)
  }

function GetMap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >


        { /* Child components, such as markers, info windows, etc. */ }
        <>       <Marker
      onLoad={onLoad}
      position={position}
    />
    </>
      </GoogleMap>
  ) : <></>
}

export default React.memo(GetMap)