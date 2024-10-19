<script setup lang="ts">
import AppHeader from '@/ui-kit/AppHeader.vue';
import AppNavigation from '@/ui-kit/AppNavigation.vue';
import AppMain from '@/ui-kit/AppMain.vue';
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
