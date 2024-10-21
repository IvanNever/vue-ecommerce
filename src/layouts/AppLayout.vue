<script setup lang="ts">
import AppHeader from '@/layouts/AppHeader.vue';
import AppNavigation from '@/layouts/AppNavbar.vue';
import AppMain from '@/layouts/AppMain.vue';
import AppFooter from '@/layouts/AppFooter.vue';
</script>

<template>
  <v-app>
    <AppHeader />
    <AppNavigation />
    <AppMain>
      <div class="flex-grow-1">
        <router-view />
      </div>
      <AppFooter />
    </AppMain>
  </v-app>
</template>

<style scoped lang="scss"></style>
