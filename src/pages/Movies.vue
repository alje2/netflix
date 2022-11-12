<template>
  <q-page class="flex flex-center">
    <div class="text-white">Welcome netflix clone</div>
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
