import { useState } from "react"
import GooglePlacesAutocomplete from 'react-google-places-autocomplete'
import GetList from './GetList'
import { GOOGLE_KEY, BACKEND_URL } from '@env'
import styles from "../styles";

const Search = (props) => {
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [list, setList] = useState('')
  const [resultsVisible, setResultsVisible] = useState(false)
  
  // Submit function after pressing button
  const submit = async (e) => {
    // Prevents refresh of page
    e.preventDefault()

    // If location has a value then makes a request to IMDB API for movies filmed in that location. 
    // Formats the search term from the autocomplete string.
    if (location !== "") {
      setResultsVisible(true)
      setIsLoading(true)
      const locationArray = location.label.split(', ')
      const formattedLocation = `${locationArray[0]}, ${locationArray[locationArray.length-1]}`

      fetch(`${BACKEND_URL}api/imdb/byLocation/${formattedLocation}`)
      .then((res) => res.json())
      .then((data) => {
        setList(data.results)
        setIsLoading(false)
      })
    }
  };

  // Hides trending movies after submit button is clicked to prevent overlapping
  const hideView= () => {
    props.setHideTrending(true)
  };
  
  return(
    <>
    {/* Google autocomplete API. sets placeholder and how it displays. 
    Sets value to location variable and updates as user types, this is sent to the API to autocomplete */}
      <GooglePlacesAutocomplete
        apiKey = {GOOGLE_KEY}
        selectProps={{
          placeholder: 'Enter a location...',
          styles: {
            container: (provided) => ({
              ...provided,
              color: 'black',
              width: '300px',
              marginTop: '30px',
              marginBottom: '10px',
              fontFamily: 'Arial',
            }),
          },
          location,
          onChange: setLocation,
        }}
        autocompletionRequest={{
          types: ['(cities)']
        }}
      />
      {/* When resultsVisible is true (after fetch request has completed) sends the returned list into GetList to be displayed */}
      <input style={styles.submitBtn} type="submit" value="Submit" data-testid="submitBtn" onClick={ (e) => { submit(e); hideView(); }}/>
      {resultsVisible && <div style={styles.row}>
        <GetList list={list} isLoading={isLoading} location = {location}/>
      </div>}
    </>
  );
};

export default Search

