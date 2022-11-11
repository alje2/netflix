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

    <q-page-container class="bg-dark overflow-hidden">
      <router-view v-slot="{ Component, route }">
        <transition name="fade-in" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
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

.fade-in-enter-active
  transition: all .3s ease-out
.fade-in-leave-active
  transition: all .1s ease-out

.fade-in-enter-from
  opacity: 0
  transform: scale(0)

.fade-in-leave-to
  opacity: 0
  transform: scale(1)
</style>
