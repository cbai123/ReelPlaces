const apiKey = require('./apiKey');

class MovieClient {
  loadMovies(callback) {
    fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`)
    .then((response) => response.json())
    .then((data) => callback(data))
  };

  loadMoviesByLocation(location, callback) {
    fetch(`https://imdb-api.com/API/AdvancedSearch/${apiKey}?has=locations&locations=${location}`)
    .then((response) => response.json())
    .then((data) => callback(data))
  }
};
module.exports = MovieClient