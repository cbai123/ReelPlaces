// import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import { useLocation } from 'react-router-dom';
import Search from './search';
import { StatusBar } from 'expo-status-bar';
import styles from "../styles";
const image = require('../assets/image1.png')


const MovieInfo = () => {
  const location = useLocation()
  const{movie} = location.state
  return (
  <>
    <View style={styles.container}>
      <div style={styles.navbar}>
        <img src={image}/>
      </div>
      <div style={styles.centre}>
        <Text>Welcome to ReelPlaces!</Text>
        <Search />
        <View style={styles.imagePadding}> 
          <Image source={{uri: movie.image}} style = {{ width: 200, height: 300 }}/>
        </View>
        <Text ><strong>{movie.title} </strong></Text>
        <Text ><strong>{movie.description}</strong></Text>
        <Text ><strong>{movie.plot}</strong></Text>
        <Text ><strong>{movie.runtimeStr}</strong></Text>
        <Text ><strong>{movie.stars}</strong></Text>
        <Text ><strong>{movie.imDbRating}</strong></Text>
        <StatusBar style="auto" />
      </div>
    </View>
  </>
  )
};

export default MovieInfo;

