import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Search from './components/search';
import GetList from "./components/GetList";
import styles from './styles';
const image = require('./assets/image1.png')
// import * as eva from '@eva-design/eva';
// import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'

export default function App() {
  return (
   
      <View style={styles.container}>
        <div style={styles.navbar}>
          <img src={image} />
        </div>
        <div style={styles.centre}>
          <Text>Welcome to ReelPlaces!</Text>
          <Search />
          {GetList()}
          <StatusBar style="auto" />
        </div>
      </View>
    //  </ApplicationProvider>
    
  );
}


