<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-dark">
        <q-toolbar-title class="title text-primary"> NETFLIX </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding class="bg-dark">
        <div class="fit flex row items-center justify-center text-white">
          <!-- col-xs-12 col-sm-8 col-md-5 col-lg-3  -->
          <q-card flat class="q-pa-md sign-in-card full-width">
            <div class="title q-mb-lg">Sign In</div>
            <q-item
              dense
              v-if="authStore.error"
              class="bg-n-orange q-mb-md rounded"
            >
              <q-item-section>
                <q-item-label>{{ authStore.error }}</q-item-label>
              </q-item-section>
            </q-item>
            <q-form @submit="login">
              <q-input
                class="q-mb-sm"
                input-class="rounded"
                bg-color="n-grey"
                label-color="white"
                placeholder="user@gmail.com"
                color="n-orange"
                v-model="email"
                type="text"
                label="Email"
                lazy-rules
                :rules="[
                  (val) =>
                    val.length || 'Please enter a valid email or phone number.',
                ]"
              />
              <q-input
                input-class="rounded"
                bg-color="n-grey"
                label-color="white"
                placeholder="1234"
                color="n-orange"
                v-model="password"
                type="password"
                label="Password"
                lazy-rules
                :rules="[
                  (val) =>
                    val.length ||
                    'Your password must contain between 4 and 60 characters.',
                ]"
              />
              <q-btn
                type="submit"
                size="lg"
                :loading="authStore.loading"
                :disable="authStore.loading"
                color="primary"
                no-caps
                label="Sign In"
                class="full-width q-my-md"
              />
            </q-form>
            <div>New to Netflix? Sign up now.</div>
          </q-card>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useAuthStore } from 'src/stores/Auth';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'LoginLayout',
  setup() {
    const email = ref('');
    const password = ref('');
    const authStore = useAuthStore();

    return {
      authStore,
      email,
      password,
    };
  },
  methods: {
    login() {
      const data = {
        email: this.email,
        password: this.password,
      };
      this.authStore.login(data).then((response) => {
        if (this.authStore.isLoggedIn) this.$router.push({ name: 'Home' });
      });
    },
  },
});
</script>

<style lang="sass" scoped>
.sign-in-card
  max-width: 28rem
  min-height: 85vh
  background-color: rgba(0, 0, 0, .1)
</style>
