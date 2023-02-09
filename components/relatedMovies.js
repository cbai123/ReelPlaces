import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from "react-native";
import { Router, Route, Link, Routes } from 'react-router-dom';
import styles from "../styles";

const RelatedMovies = ({movieList, movieIndex}) => {
  const firstTen = movieList;
  firstTen.splice(movieIndex, movieIndex);
  const suggestedList = movieList.slice(0, 5);

  return suggestedList.map((movie, index) => (

    <Fragment key={index}>
      <li>
        <Link to={'/movieinfo'} state={{movie: movie, list: firstTen, index: index}}>
          <Text style={styles.suggestedMoviesText} >
            <strong>{movie.title} </strong>
          </Text>
          {/* <Text ><strong>{movie.description}</strong></Text> */}
          <View style={styles.suggestedMoviesImage}> 
            <Image source={{uri: movie.image}} style = {{ width: 100, height: 150 }}/>
          </View>
        </Link>
      </li>
    </Fragment>

  ));

};

export default RelatedMovies;