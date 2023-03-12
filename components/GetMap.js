import React, {useState, useEffect} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { GOOGLE_KEY } from '@env'

const containerStyle = {
  width: '600px',
  height: '500px'
};

const GetMaps = ({ locationArray, searchedLocation }) => {

  const [latLngArr, setLatLngArr] = useState([]) 
  const [center, setCenter] = useState({})
  const [zoom, setZoom] = useState(11)

  // Every time locationArray and searchedLocation update re-requests lat and long coordinates from Google API
  useEffect(() => {
    // Resets array so doesn't carry over locations if movie has changed
    setLatLngArr([])

    // Gets lat and long of searched location (e.g. London) to centre the map. If no searchedLocation then centres on (0,0) and zooms out.
    async function getCenterLatLng() {
      if (searchedLocation) {
        const centerUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchedLocation.label}&key=${GOOGLE_KEY}`
        const centerResponse = await fetch(centerUrl)
        const centerResult = await centerResponse.json()
        const centerLatLng = await centerResult.results[0].geometry.location
        setCenter(centerLatLng)
        setZoom(11)
      } else {
        setCenter({'lat': 0, 'lng': 0})
        setZoom(1)
      }     
    }

    // Iterates over the filming locations to get lat and long for each location, for the markers.
    async function getLatLng() {
      locationArray.forEach( async (location) => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${GOOGLE_KEY}`
        const response = await fetch(url)
        const result = await response.json()
        const latLng = await result.results[0].geometry.location
        setLatLngArr(oldArray => [...oldArray, latLng])
      })
    }

    getCenterLatLng()
    getLatLng()
  }, [locationArray, searchedLocation])

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_KEY
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >

        {latLngArr.map((latLng, index) => {
          return(
            <Marker key={index}
              position={latLng}
            />
          )
        })}
        <></>
      </GoogleMap>
  ) : <></>
}

export default GetMaps