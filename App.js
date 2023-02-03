import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Search from './components/search';
import styles from './styles';
const image = require('./assets/reelplaces.png')
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'

export default function App() {
  return (
   
      <View style={styles.container}>
        <div style={styles.navbar}>
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
}


