// import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from "react-native";
import { useLocation } from "react-router-dom";
import Search from "./search";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";
import RelatedMovies from "./relatedMovies";
const image = require("../assets/reelplaces.png");

const MovieInfo = () => {
  const location = useLocation();
  const movie = location.state.movie;
  const movieList = location.state.list;
  const movieIndex = location.state.index;

  return (
    <>
      <View style={styles.container}>
        <div style={styles.movieNavbar}>
          <a href="/" >
            <img src={image} style={styles.moviePageLogo} />
          </a>
          <div style={styles.movieSearch}>
            <Search />
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
              <b> Check out other movies shot here! </b> </Text>
                <RelatedMovies movieList={movieList} movieIndex={movieIndex} />
          </div>
        </div>

      </View>
    </>
  );
};

export default MovieInfo;
