import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { BACKEND_URL } from '@env'
import Search from './search';
import styles from '../styles';
import MovieSummary from './MovieSummary';
const image = require('../assets/reelplaces.png')

const Home = () => {
  const [trending, setTrending] = useState();
  const [hideTrending, setHideTrending] = useState(false);
  const isLoading = trending == undefined

  // Fetches a list of trending movies from the IMDB API
  useEffect(() => {
    fetch(`${BACKEND_URL}api/imdb/trending`)
    .then((res) => res.json())
    .then((result) => {
      setTrending(result.items);
    });
  }, []);

  // Returns the HTML for the homepage. Contains the search bar component and takes in a list of movies as an argument to display as trending.
  const displayHomePage = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />
    }
    const topTen = data.slice(0,10);

    return (
      <View style={styles.container}>
        {/* Sets the logo, title, and search bar */}
          <div>
            <img src={image} style={styles.logo}/>
          </div>
          <div style={styles.centre}>
            <div style={styles.welcomeTextContainer} >
              <Text style={styles.welcomeText}>WELCOME TO REELPLACES!</Text>
            </div>
            <Search hideTrending={hideTrending} setHideTrending={setHideTrending} />
          </div>

        {/* Iterates over the list of trending movies to display them, until the search submit button is clicked. */}
        {!hideTrending && (
          <View>
          <Text style={styles.homeTitle}>  This weeks trending movies! </Text>
          <div style={styles.homeColumn}>
            {topTen.map((movie, index) => (
              <li key={index}>
              <div style={styles.row}>
                <div style={styles.movieContainer}>
                  <MovieSummary style={styles.homeImage} movie={movie} index={index} firstTen={topTen}/>
                </div>
              </div>
              </li>
            ))}
          </div>
          </View>
        )}
      </View>
    );
  };

  return displayHomePage(trending)
};

export default Home