import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import styles from './styles';
import apiKey from '../api/apiKey'

const GetList = ({ list, isLoading }) => {

  const getFirstTen = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    const firstTen = data.slice(0, 20);
    return firstTen.map((movie, index) => (

      <Fragment key={index}>
        <div data-testid="TitleID" style={styles.column}>
          <li>
            <Link to={'/movieinfo'} state={{movie: movie}}> 
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

  return getFirstTen(list)
};

export default GetList;