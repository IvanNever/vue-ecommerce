<script setup lang="ts">
import { useTheme } from 'vuetify';
import { useNavbar } from '@/layouts/useNavbar';
import AppIconButton from '@/ui-kit/AppIconButton.vue';

const theme = useTheme();
const { toggleNavbar } = useNavbar();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <v-app-bar class="header" elevation="1">
    <template #prepend>
      <v-app-bar-nav-icon @click.stop="toggleNavbar" />
    </template>
    <v-toolbar-title>VueMart</v-toolbar-title>
    <template #append>
      <div class="pr-5">
        <AppIconButton
          icon="mdi-theme-light-dark"
          density="comfortable"
          size="x-large"
          @click="toggleTheme"
        ></AppIconButton>
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss"></style>
