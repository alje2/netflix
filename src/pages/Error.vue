<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center column"
  >
    <h4>Oops! There was an error</h4>
    <p class="text-body1">{{ error || 'Unknown error' }}</p>
    <q-btn color="primary" :to="{ name: 'Home' }" label="Home" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorPage',
  props: ['error'],
});
</script>
