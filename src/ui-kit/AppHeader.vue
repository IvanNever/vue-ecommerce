<script setup lang="ts">
import { useTheme } from 'vuetify';
import AppIcon from '@/ui-kit/AppIcon.vue';

const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>

<template>
  <v-app-bar title="VueMart" class="header">
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
