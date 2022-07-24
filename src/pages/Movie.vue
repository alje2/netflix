<template>
  <q-page class="flex flex-center">
    <q-item v-if="movieStore.movie">
      <q-item-section>
        <q-item-label>{{ movieStore.movie.name }}</q-item-label>
        <q-item-label caption lines="2">{{
          movieStore.movie.description
        }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script>
import { useMovieStore } from 'src/stores/Movie';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoviePage',
  setup() {
    const movieStore = useMovieStore();
    return {
      movieStore,
    };
  },
  mounted() {
    console.log(this.$route.params.id);
    this.movieStore.fetchMovie(this.$route.params.id);
  },
});
</script>
