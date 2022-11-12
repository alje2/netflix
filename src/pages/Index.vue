<template>
  <q-page class="flex flex-center column">
    <user-profiles />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import UserProfiles from 'src/components/UserProfiles.vue';
export default defineComponent({
  name: 'IndexPage',
  components: { UserProfiles },
});
</script>
