import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from "react-native";
import { useLocation } from "react-router-dom";
import Search from "./search";
import { StatusBar } from "expo-status-bar";
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

  useEffect(() => {
    async function getLocations() {
      const url = `http://localhost:3000/api/getOne/${id}`
      const response = await fetch(url)
      const data = await response.json()
      if(data) {
        const result = data.locations
        setShowMap(true)
        if (searchedLocation) {
          const filteredArray = result.filter(location => location.includes(searchedLocation.label.split(', ')[0]))
          setLocationArray(filteredArray)
        } else {
          setLocationArray(result)
        }
      }
    }

    getLocations()
  }, [])

  return (
    <>
      <View style={styles.container}>
        <div style={styles.movieNavbar}>
          <a href="/" >
            <img src={image} style={styles.moviePageLogo} />
          </a>
          <div style={styles.movieSearch}>
            {/* <Search /> */}
            <StatusBar style="auto" />
          </div>
        </div>

        <div style={styles.movieTitle}>
          <h1 style={styles.fontLoader}>
              {movie.title} {movie.description}{'\n'}
          </h1>
        </div>

        {/* wrapping div */}
        <div style={styles.movieInfoContent} >
          <div style={styles.movieInfoWrapper}>
            <div style={styles.movieImage}>
              <View style={styles.imagePadding}>
                <Image
                  source={{ uri: movie.image }}
                  style={{ width: "20vw", height: "30vw" }}
                />
              </View>
            </div>

            {/* text */}
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

          <div style={styles.suggestedMoviesBox}>
            <Text style={styles.movieDetails}>
              <b> Check out other movies filmed here! </b> </Text>
                <RelatedMovies movieList={movieList} movieIndex={movieIndex} />
          </div>
        </div>

          {showMap &&
          <GetMaps locationArray={locationArray} searchedLocation={searchedLocation}/>
          }
      </View>
    </>
  );
};

export default MovieInfo;
