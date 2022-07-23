import { api } from 'src/boot/axios';

export default {
  fetchMovies() {
    return api.get('/movies');
  },
  fetchMovie(id) {
    return api.get(`/movies/${id}`);
  },
};
