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
    fetch(`https://imdb-api.com/en/API/BoxOffice/${apiKey}`)
    .then((res) => res.json())
    .then((result) => {
      setTrending(result.items);
    });
  }, []);

  const getTopTen = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />
    }
    const topTen = data;

    return (
      <View>
        {/* <View style={styles.container}>
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
        </View> */}

        <View>
        <h2 style={styles.fontLoader}>  This weeks trending movies! </h2>
        <div style={styles.homeColumn}>
        {/* <div style={styles.homeRow}> */}
          {topTen.map((movie, index) => (
            // <li>
            <div>
              <Fragment key={index}>
                {/* <Link to={'/movieinfo'} state={{movie: movie}}>  */}
                  <Text><strong>{movie.title} </strong></Text>
                  <View style={styles.homeImage}> 
                    <Image source={{uri: movie.image}} style={{ width: 200, height: 300 }} />
                  </View>
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

  return getTopTen(trending)
};

export default Home