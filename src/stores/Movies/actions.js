import movies from 'src/api/movies';

export default {
  fetchMovies() {
    return movies
      .fetchMovies()
      .then((response) => {
        this.movies = response.data;
      })
      .catch((error) => {
        this.router.push({
          name: 'Error',
          params: { error: error },
        });
        // throw error;
      });
  },
  fetchMovie(id) {
    return movies
      .fetchMovie(id)
      .then((response) => {
        this.movie = response.data;
      })
      .catch((error) => {
        this.router.push({
          name: 'Error',
          params: { error: error },
        });
        // throw error;
      });
  },
};
