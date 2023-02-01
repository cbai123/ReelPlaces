import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://imdb-api.com/API/AdvancedSearch/k_utajixp9?locations=London")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("I " + result)
          setResponse(result);
          console.log("II " + response);

          console.log("III " + result)
          console.log(result.id);
          setIsLoading(false);
        }
    )
  }, []);

  const getListing = () => {
    console.log(isLoading)
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    console.log("IV " + response.results[0].id )

    const firstTen = response.results.slice(0,10)

    return firstTen.map((movie, index) => (
      <Text> {index + 1}: {movie.title} </Text>
    ))
  }

  //function render (){ 
    return (
      <View style={styles.container}>
        <Text>ReelPlaces</Text>
        {getListing()}
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
