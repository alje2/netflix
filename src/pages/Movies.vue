<template>
  <q-page class="flex flex-center">
    <q-item
      v-for="movie in movieStore.movies"
      :key="movie.id"
      clickable
      @click="$router.push({ name: 'Movie', params: { id: movie.id } })"
    >
      <q-item-section>
        <q-item-label>{{ movie.name }}</q-item-label>
        <q-item-label caption lines="2">{{ movie.description }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script>
import { useMovieStore } from 'src/stores/Movie';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoviesPage',
  setup() {
    const movieStore = useMovieStore();
    return {
      movieStore,
    };
  },
  created() {
    this.movieStore.fetchMovies();
  },
});
</script>
