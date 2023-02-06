import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Search from './search';
import styles from '../styles';
const image = require('../assets/reelplaces.png')

const Home = () => {
  return (
      <View style={styles.container}>
        <div >
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
    //  </ApplicationProvider> 
  );
};

export default Home