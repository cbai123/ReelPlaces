// import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from "react-native";
import { useLocation } from "react-router-dom";
import Search from "./search";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";
const image = require("../assets/reelplaces.png");

const MovieInfo = () => {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <>
      <View style={styles.container}>
        <div style={styles.movieNavbar}>
          <img src={image} style={styles.moviePageLogo} />
          <div style={styles.movieSearch}>
            <Search />
            {/* <StatusBar style="auto" /> */}
          </div>
        </div>

        <div style={styles.movieTitle}>
          <h1 style={styles.fontLoader}>
              {movie.title} {movie.description}{'\n'}
          </h1>
        </div>

          {/* wrapping div */}
          <div style={styles.movieInfoWrapper}>
            <div style={styles.movieImage}>
              <View style={styles.imagePadding}>
                <Image
                  source={{ uri: movie.image }}
                  style={{ width: 400, height: 600 }}
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

          
       
      </View>
    </>
  );
};

export default MovieInfo;
