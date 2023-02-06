import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Search from './search';
import GetList from "./GetList";
import styles from '../styles';
const image = require('../assets/image1.png')

const Home = () => {
  return (
      <View style={styles.container}>
        <div style={styles.navbar}>
          <img src={image}/>
        </div>
        <div style={styles.centre}>
          <Text>Welcome to ReelPlaces!</Text>
          <Search />
          <div  style={styles.row}>
          {GetList()}
          </div>
          <StatusBar style="auto" />
        </div>
      </View>
    //  </ApplicationProvider>  
  );
};

export default Home