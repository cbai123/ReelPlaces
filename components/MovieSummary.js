import { View, Image, Text } from "react-native";
import { Link } from 'react-router-dom';

const MovieSummary = ({style, movie, location}) => {
  // const movie = props.movie
  // const location = props.location

  return (
    <>
      <Link to={'/movieinfo'} state={{movie: movie, searchedLocation: location}}> 
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