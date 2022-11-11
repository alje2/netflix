<template>
  <router-view />
</template>

<script>
import { useQuasar } from 'quasar';
import { defineComponent } from 'vue';
import customIconSet from 'src/icons/custom-icons.js';
export default defineComponent({
  name: 'App',
  setup() {
    const $q = useQuasar();

    function changeIconSetToCustomIconSet() {
      $q.iconSet.set(customIconSet);
    }

    return {
      changeIconSetToCustomIconSet,
    };
  },
  beforeCreate() {
    this.changeIconSetToCustomIconSet();
  },
});
</script>
