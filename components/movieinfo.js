// import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from "react-native";
import { useLocation } from "react-router-dom";
import Search from "./search";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";
const image = require("../assets/image1.png");

const MovieInfo = () => {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <>
      <View style={styles.container}>
        <div style={styles.navbar}>
          <img src={image} />
        </div>
        <div style={styles.centre}>
          <Text>Welcome to ReelPlaces!</Text>
          <Search />
          <StatusBar style="auto" />
        </div>


          {/* wrapping div */}
          <div style={styles.movieInfoWrapper}>
            <div style={styles.movieImage}>
              <View style={styles.imagePadding}>
                <Image
                  source={{ uri: movie.image }}
                  style={{ width: 200, height: 300 }}
                />
              </View>
            </div>

            {/* text */}
            <div style={styles.movieText}>
              <h2 style={styles.fontLoader}>
                <strong>{movie.title}{'\n'}</strong>
              </h2>

              <Text>
                <strong>Release year:</strong> {movie.description}{'\n'}
              </Text>
              <Text>
                <strong>Plot:</strong> {movie.plot}{'\n'}
              </Text>
              <Text>
                <strong>Runtime:</strong> {movie.runtimeStr}{'\n'}
              </Text>
              <Text>
                <strong>Stars:</strong> {movie.stars}{'\n'}
              </Text>
              <Text>
                <strong>IMDb Rating:</strong> {movie.imDbRating}{'\n'}
              </Text>
            </div>
          </div>

          
       
      </View>
    </>
  );
};

export default MovieInfo;
