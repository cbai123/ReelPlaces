import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import Search from './search';
import styles from '../styles';
import {apiKey, googleKey} from "../api/apiKey";
import MovieSummary from './MovieSummary';
const image = require('../assets/reelplaces.png')

const Home = () => {
  const [trending, setTrending] = useState();
  const [hideTrending, setHideTrending] = useState(false);
  const isLoading = trending == undefined

  useEffect(() => {
    fetch(`https://imdb-api.com/en/API/InTheaters/${apiKey}`)
    .then((res) => res.json())
    .then((result) => {
      setTrending(result.items.slice(0, 16));
    });
  }, []);

  const getTopFilms = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />
    }
    const topTen = data;

    return (
      <View>
        <View style={styles.container}>
          <div>
            <img src={image} style={styles.logo}/>
          </div>
          <div style={styles.centre}>
            <div style={styles.welcomeTextContainer} >
              <Text style={styles.welcomeText}>WELCOME TO REELPLACES!</Text>
            </div>
            <Search hideTrending={hideTrending} setHideTrending={setHideTrending} />
            <StatusBar style="auto" />
          </div>
        </View>

        {!hideTrending && (
          <View>
          <Text style={styles.homeTitle}>  This weeks trending movies! </Text>
          <div style={styles.homeColumn}>
            {topTen.map((movie, index) => (
              <li key={index}>
              <div style={styles.row}>
                <div style={styles.movieContainer}>
                  <MovieSummary style={styles.homeImage} movie={movie} />
                </div>
              </div>
              </li>
            ))}
          </div>
          </View>
        )};
      </View>
    );
  };

  return getTopFilms(trending)
};

export default Home