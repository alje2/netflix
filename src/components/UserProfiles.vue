<template>
  <div class="flex row q-pa-md justify-center profiles-wrap">
    <div
      v-for="profile in profiles"
      @click="openProfile(profile)"
      :key="profile.id"
      class="flex column items-center justify-center text-white profile"
    >
      <q-icon
        name="icon-avatar"
        size="150px"
        :color="profile.color"
        class="profile-icon"
      />
      <div class="text-weight-medium q-mt-xs text-body1 text-uppercase">
        {{ profile.name }}
      </div>
    </div>
    <user-pin
      v-if="userPin"
      @close="userPin = false"
      @pinValidated="goToMovies"
      :current-pin="userPin.lock"
    />
  </div>
</template>

<script>
import { useAuthStore } from 'src/stores/Auth';
import { ref } from 'vue';
import UserPin from './UserPin.vue';
export default {
  components: {
    UserPin,
  },
  setup() {
    const authStore = useAuthStore();
    return {
      authStore,
      userPin: ref(false),
    };
  },
  computed: {
    profiles() {
      return this.authStore.user.profiles;
    },
  },
  methods: {
    openProfile(profile) {
      !profile.lock ? this.goToMovies() : (this.userPin = profile);
    },
    goToMovies() {
      this.$router.push({ name: 'Movies' });
    },
  },
};
</script>

<style lang="sass" scoped>
.profiles-wrap
  gap: 15px
.profile-icon
  opacity: 0.5
.profile
  transition: all .2s ease-in-out
  &:hover
    transform: scale(1.1)
    .profile-icon
      opacity: 1
</style>
