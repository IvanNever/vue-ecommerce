<script setup lang="ts">
import AppHeader from '@/layouts/AppHeader.vue';
import AppNavigation from '@/layouts/AppNavbar.vue';
import AppMain from '@/layouts/AppMain.vue';
</script>

<template>
  <v-app>
    <AppHeader />
    <AppNavigation />
    <AppMain>
      <router-view />
    </AppMain>
  </v-app>
</template>

<style scoped lang="scss"></style>
