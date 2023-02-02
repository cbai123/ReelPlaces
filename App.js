import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { Text, View } from 'react-native';
import Search from './components/search';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components'

export default function App() {
  return (
   
     <ApplicationProvider {...eva} theme={eva.dark}>
      {/* <View style={styles.container}> */}
      {/* <View> */}
        <Text>Open up App.js to start working on your app!</Text>
        {/* <StatusBar style="auto" /> */}
        <Search />

      {/* </View> */}
     </ApplicationProvider>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
