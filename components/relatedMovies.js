import { Fragment, useEffect, useState } from 'react';
import { View, Image, Text, ActivityIndicator } from "react-native";
import { useLocation } from "react-router-dom";
import Search from "./search";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";
import MovieClient from "../api/movieClient";

const RelatedMovies = ({movieList, movieIndex}) => {
console.log(movieList)
  movieList.splice(movieIndex, movieIndex);
  const suggestedList = movieList.slice(0, 5);

  return suggestedList.map((movie, index) => (

    <Fragment key={index}>
      <div data-testid="TitleID" style={styles.column}>
        <li>
          <Text ><strong>{movie.title} </strong></Text>
          {/* <Text ><strong>{movie.description}</strong></Text> */}
          <View style={styles.imagePadding}> 
            <Image source={{uri: movie.image}} style = {{ width: 100, height: 150 }}/>
          </View>
        </li>
      </div>
    </Fragment>

  ));

};

export default RelatedMovies;