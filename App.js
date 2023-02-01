import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default function App() {
  let [isLoading, setIsLoading] = useState(true);
  let [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/random_ten")
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
    console.log("IV " + response )

    //return <Text>{ response[0].setup }</Text>

    return response.map((movie) => (<Text> Movie:{movie.setup} Location: {movie.punchline}</Text>
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
