import { Fragment } from 'react';
import { ActivityIndicator } from 'react-native';
import styles from '../styles';
import MovieSummary from './MovieSummary';

const GetList = ({ list, isLoading, location }) => {

  const getFirstTwelve = (data) => {

    // Loading circle while API call is taking place in search component
    if (isLoading) {
      return <ActivityIndicator size="large" />;
    }

    // Takes top 12 movies from list and sends info into MovieSummary component
    const firstTwelve = data.slice(0, 12);
    return firstTwelve.map((movie, index) => (

      <Fragment key={index}>
        <div data-testid="TitleID" style={styles.column}>
          <li>
            <MovieSummary style={styles.imagePadding} movie={movie} location={location} firstTwelve={firstTwelve} index={index}/>
          </li>
        </div>
      </Fragment>

    ));
  };

  return getFirstTwelve(list)
};

export default GetList;