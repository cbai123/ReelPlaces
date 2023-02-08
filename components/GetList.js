import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import styles from '../styles';
import apiKey from '../api/apiKey'
import MovieSummary from './MovieSummary';

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
            <MovieSummary style={styles.imagePadding} movie={movie} />
          </li>
        </div>
      </Fragment>

    ));
  };

  return getFirstTen(list)
};

export default GetList;