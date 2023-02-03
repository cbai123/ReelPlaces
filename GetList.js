import { useEffect, useState } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import styles from './styles';
import apiKey from './api/apiKey'

const GetList = ({ list, isLoading }) => {

  const getFirstTen = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    const firstTen = data.slice(0, 10);
    return firstTen.map((movie, index) => (
        <Text data-testid="TitleID" key={movie.id}>
          {index + 1}: {movie.title}
        </Text>

    ));
  };

  return getFirstTen(list)
};

export default GetList;