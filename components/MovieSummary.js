import { View, Image, Text } from "react-native";
import { Link } from 'react-router-dom';

const MovieSummary = (props) => {
  const movie = props.movie

  return (
    <>
      <Link to={'/movieinfo'} state={{movie: movie}}> 
        <Text ><strong>{movie.title} </strong></Text>
        <Text ><strong>{movie.description}</strong></Text>
        <View style={props.style}> 
          <Image source={{uri: movie.image}} style = {{ width: 200, height: 300 }}/>
        </View>
      </Link>
    </>
  )
}

export default MovieSummary;