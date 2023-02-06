import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import MovieInfo from './movieinfo';
import styles from "../styles";
const apiKey = require('../api/apiKey');

const GetList = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState();
  const isLoading = response == undefined;

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
    const firstTen = data.results.slice(0, 20);
    return firstTen.map((movie, index) => (

      <Fragment key={index}>
        <div data-testid="TitleID" style={styles.column}>
          <li>
            <Link to={'/movieinfo'}> 
              <Text ><strong>{movie.title} </strong></Text>
              <Text ><strong>{movie.description}</strong></Text>
              <View style={styles.imagePadding}> 
                <Image source={{uri: movie.image}} style = {{ width: 200, height: 300 }}/>
              </View>
            </Link>
          </li>
        </div>
      </Fragment>

    ));
  };

  console.log(response)
  return getFirstTen(response)
};

export default GetList;