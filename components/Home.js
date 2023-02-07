import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useEffect, useState } from 'react';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import {BrowserRouter as Link } from 'react-router-dom';
import Search from './search';
import styles from '../styles';
import apiKey from '../api/apiKey';
const image = require('../assets/reelplaces.png')

const Home = () => {
  const [trending, setTrending] = useState();
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
            <Search />
            <StatusBar style="auto" />
          </div>
        </View>

        <View>
        <Text style={styles.homeTitle}>  This weeks trending movies! </Text>
        <div style={styles.homeColumn}>
        {/* <div style={styles.homeRow}> */}
          {topTen.map((movie, index) => (
            // <li>
            <div style={styles.row}>
              <Fragment key={index}>
                {/* <Link to={'/movieinfo'} state={{movie: movie}}>  */}
                <div style={styles.movieContainer}>
                  <Text><strong>{movie.title} </strong></Text>
                  <View style={styles.homeImage}> 
                    <Image source={{uri: movie.image}} style={{ width: 200, height: 300 }} />
                  </View>
                </div>
                {/* </Link> */}
              </Fragment>
            </div>
            // </li>
          ))}
        {/* </div> */}
        </div>
        </View>
      </View>
    );
  };

  return getTopFilms(trending)
};

export default Home