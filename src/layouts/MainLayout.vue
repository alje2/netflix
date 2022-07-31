<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar class="bg-dark">
        <q-toolbar-title class="title text-primary"> NETFLIX </q-toolbar-title>
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
