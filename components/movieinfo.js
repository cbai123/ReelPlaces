import { useEffect, useState } from 'react';
import { View, Image, Text } from "react-native";
import { useLocation } from "react-router-dom";
import { BACKEND_URL } from '@env'
import styles from "../styles";
import GetMaps from './GetMap';
import RelatedMovies from "./relatedMovies";
const image = require("../assets/reelplaces.png");

const MovieInfo = () => {
  const [locationArray, setLocationArray] = useState([])
  const [showMap, setShowMap] = useState(false)
  const {movie, searchedLocation, list, index} = useLocation().state;
  const movieList = list
  const movieIndex = index
  const id = movie.id

  // Sends a request to the database for the locations attached to a movie id. Reruns whenever the movie id updates. 
  // Returns an array of the locations, can be filtered by the search term.
  useEffect(() => {
    async function getLocations() {
      const url = `${BACKEND_URL}api/getOne/${id}`
      const response = await fetch(url)
      const data = await response.json()
      if(response.status === 200) {
        const result = data.locations
        setShowMap(true)
        if (searchedLocation) {
          const filteredArray = result.filter(location => location.includes(searchedLocation.label.split(', ')[0]))
          setLocationArray(filteredArray)
        } else {
          setLocationArray(result)
        }
      } else {
        setShowMap(false)
      }
    }
    getLocations()
  }, [id])

  return (
    <>
      <View style={styles.container}>
          <a href="/" >
            <img src={image} style={styles.logo} />
          </a>

        <div style={styles.movieTitle}>
          <h1 style={styles.fontLoader}>
              {movie.title} {movie.description}{'\n'}
          </h1>
        </div>

        {/* div wraps movie info and map */}
        <div style={styles.movieInfoWrapper} >
          <div style={styles.movieInfoContent}>
            <div style={styles.movieImage}>
              <View style={styles.imagePadding}>
                <Image
                  source={{ uri: movie.image }}
                  style={{ width: "15vw", height: "23vw" }}
                />
              </View>
            </div>

            {/* movie info */}
            <div style={styles.movieText}>

              <Text style={styles.movieDetails}>
                <strong>Release year:</strong> {movie.description}{'\n'}
              </Text>
              <Text style={styles.movieDetails}>
                <strong>Plot:</strong> {movie.plot}{'\n'}
              </Text>
              <Text style={styles.movieDetails}>
                <strong>Runtime:</strong> {movie.runtimeStr}{'\n'}
              </Text>
              <Text style={styles.movieDetails}>
                <strong>Stars:</strong> {movie.stars}{'\n'}
              </Text>
              <Text style={styles.movieDetails}>
                <strong>IMDb Rating:</strong> {movie.imDbRating}{'\n'}
              </Text>
            </div>
          </div>

          {/* Map */}
          <div style={styles.mapStyling}>
            {showMap ?
            <GetMaps locationArray={locationArray} searchedLocation={searchedLocation}/> :
            <Text style={styles.mapError}> Sorry! Filming location unavailable</Text>
            }
          </div>          
        </div>
            
        {/* div wraps suggested movies */}
        <div style={styles.suggestedMoviesBox}>
          <div>
            <Text style={styles.suggestedMovieDetails}>
              <b> Check out other movies filmed here! </b> 
            </Text>
          </div>
          <div style={styles.suggestedMoviesContainers}>
            <RelatedMovies movieList={movieList} movieIndex={movieIndex} searchedLocation={searchedLocation} />
          </div>  
        </div>
      </View>
    </>
  );
};

export default MovieInfo;
