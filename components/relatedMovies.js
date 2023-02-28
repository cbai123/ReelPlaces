import { Fragment } from 'react';
import { View, Image, Text } from "react-native";
import { Link } from 'react-router-dom';
import styles from "../styles";

const RelatedMovies = ({movieList, movieIndex, searchedLocation}) => {
  const firstTen = movieList;
  firstTen.splice(movieIndex, movieIndex);
  const suggestedList = movieList.slice(0, 5);

  return suggestedList.map((movie, index) => (

    <Fragment key={index}>
      <li>
        <Link to={'/movieinfo'} state={{movie: movie, searchedLocation: searchedLocation, list: firstTen, index: index}}>
          <Text style={styles.suggestedMoviesText} >
            <strong>{movie.title} </strong>
          </Text>
          <View style={styles.suggestedMoviesImage}> 
            <Image source={{uri: movie.image}} style = {{ width: 100, height: 150 }}/>
          </View>
        </Link>
      </li>
    </Fragment>

  ));

};

export default RelatedMovies;