import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import MovieCard from './MovieCard';
const apiKey = require('../api/apiKey');

const GetList = (props) => {
  // const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const isLoading = response == undefined;

  useEffect(() => {
    fetch(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?locations=London`)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
        // setIsLoading(false);
      });
  }, []);

  const getFirstTen = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    const firstTen = data.results.slice(0, 10);
    return firstTen.map((movie, index) => (

      <Fragment key={index} >
      <div data-testid="TitleID">
      <Text>{index + 1}:</Text>
      <Text >{movie.title}</Text>
      <Text >{movie.description}</Text>
      <View> 
        <Image source={{uri: movie.image}} style = {{ width: 200, height: 200 }}/>
      </View>
      </div>
      </Fragment>

      // <MovieCard 
      //   imageURL={props.imageURL} 
      //   title={props.title} 
      //   description={props.description}/>
    ));
  };

  console.log(response)
  return getFirstTen(response)
};

export default GetList;