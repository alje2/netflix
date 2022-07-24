<template>
  <q-page class="flex flex-center column">
    <div>Hello!</div>
    <div class="q-py-md">Welcome to the netflix clone</div>
    <q-btn color="primary" label="Explore movies" :to="{ name: 'Movies' }" />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
});
</script>
