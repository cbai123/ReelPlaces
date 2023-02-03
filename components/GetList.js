import { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import MovieCard from './MovieCard';
const apiKey = require('../api/apiKey');

const GetList = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?locations=London`)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
        setIsLoading(false);
      });
  }, []);

  const getFirstTen = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    const firstTen = data.results.slice(0, 10);
    return firstTen.map((movie, index) => (
      // <Text data-testid="TitleID">
      //   {index + 1}: {movie.title}
      // </Text>
      <MovieCard imageURL = {props.imageURL} title = {props.title} description = {props.description}/>
    ));
  };

  console.log(response)
  return getFirstTen(response)
};

export default GetList;