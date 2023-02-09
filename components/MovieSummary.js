import { View, Image, Text } from "react-native";
import { Link } from 'react-router-dom';

const MovieSummary = ({style, movie, location, firstTen, index}) => {
  // const movie = props.movie
  // const location = props.location

  return (
    <>
      <Link to={'/movieinfo'} state={{movie: movie, searchedLocation: location, list: firstTen, index: index}}> 
        <Text ><strong>{movie.title} </strong></Text>
        <Text ><strong>{movie.description}</strong></Text>
        <View style={style}> 
          <Image source={{uri: movie.image}} style = {{ width: 200, height: 300 }}/>
        </View>
      </Link>
    </>
  )
}

export default MovieSummary;