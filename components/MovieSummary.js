import { View, Image, Text } from "react-native";
import { Link } from 'react-router-dom';

const MovieSummary = ({style, movie, location, firstTwelve, firstTen, index}) => {

  // Displays the title, year, and picture of a movie. Is also a link to the movies individual info page.
  return (
    <>
      <Link to={'/movieinfo'} state={{movie: movie, searchedLocation: location, list: (firstTwelve || firstTen), index: index}}> 
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