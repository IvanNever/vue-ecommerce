<script setup lang="ts">
import { useTheme } from 'vuetify';
import AppIcon from '@/ui-kit/AppIcon.vue';
import { useNavbar } from '@/layouts/useNavbar';

const theme = useTheme();
const { toggleNavbar } = useNavbar();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <v-app-bar class="header">
    <template #prepend>
      <v-app-bar-nav-icon @click.stop="toggleNavbar" />
    </template>
    <v-toolbar-title>VueMart</v-toolbar-title>
    <template #append>
      <div class="header__controls">
        <AppIcon
          icon="mdi-theme-light-dark"
          size="large"
          @click="toggleTheme"
        />
      </div>
    </template>
  </v-app-bar>
</template>

<style scoped lang="scss">
.header {
  &__controls {
    padding-right: 2rem;
  }
}
</style>
