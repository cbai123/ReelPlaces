import { Fragment, useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import apiKey from '../api/apiKey';


const GetList = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const isLoading = response == undefined


  useEffect(() => {
    fetch(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?locations=London`)
      .then((res) => res.json())
      .then((result) => {
        setResponse(result);
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
      </div>
      </Fragment>

    ));
  };

  return getFirstTen(response)
};

export default GetList;