<script setup lang="ts">
import AppButton from '@/ui-kit/AppButton.vue';
import { useTheme } from 'vuetify';

const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <v-app-bar title="VueMart">
    <AppButton @click="toggleTheme">Toggle theme</AppButton>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
