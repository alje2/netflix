<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-dark">
        <q-toolbar-title class="title text-primary">
          <span class="relative-position">
            NETFLIX
            <a
              href="https://github.com/alje2/netflix"
              target="_blank"
              class="github absolute-top-right flex"
            >
              <q-badge color="transparent">
                <q-img src="github.png" width="20px" height="20px"></q-img>
              </q-badge>
            </a>
          </span>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-dark">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MainLayout',
});
</script>

<style lang="sass">
.github
  transform: translateX(25px)
</style>
