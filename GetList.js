import { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';

const GetList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://imdb-api.com/API/AdvancedSearch/k_utajixp9?locations=London")
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
      <Text>
        {index + 1}: {movie.title}
      </Text>
    ));
  };
  return getFirstTen(response)
};

export default GetList;