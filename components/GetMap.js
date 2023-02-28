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

  useEffect(() => {
    setLatLngArr([])
    async function getCenterLatLng() {
      // Get the latitude and longitude for the center of the map
      const centerUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${searchedLocation.label}&key=${GOOGLE_KEY}`
      const centerResponse = await fetch(centerUrl)
      const centerResult = await centerResponse.json()
      const centerLatLng = await centerResult.results[0].geometry.location
      setCenter(centerLatLng)
    }

    async function getLatLng() {
      // Get the latitude and longitude for the markers
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
        zoom={12}
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