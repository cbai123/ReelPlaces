import { Fragment } from 'react';
import { ActivityIndicator } from 'react-native';
import styles from '../styles';
import MovieSummary from './MovieSummary';

const GetList = ({ list, isLoading, location }) => {
  
  console.log(location)

  const getFirstTen = (data) => {
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }
    const firstTen = data.slice(0, 12);
    return firstTen.map((movie, index) => (

      <Fragment key={index}>
        <div data-testid="TitleID" style={styles.column}>
          <li>
            <MovieSummary style={styles.imagePadding} movie={movie} location={location} firstTen={firstTen} index={index}/>
          </li>
        </div>
      </Fragment>

    ));
  };

  return getFirstTen(list)
};

export default GetList;