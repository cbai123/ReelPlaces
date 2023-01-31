import MovieClient from '../api/movieClient'

require('jest-fetch-mock').enableMocks()

describe('movieClient', () => {
  it('calls and fetches movie data', (done) => {
    const movie = new MovieClient();
    fetch.mockResponseOnce(JSON.stringify({
      title: "Test Movie",
      id: 200
    }));
    movie.loadMovies((returnedDataFromAPI) => {
      expect(returnedDataFromAPI.title).toBe("Test Movie");
      expect(returnedDataFromAPI.id).toBe(200);
      done();
    });
  });
});