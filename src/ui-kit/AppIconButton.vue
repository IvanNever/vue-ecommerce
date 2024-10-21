<script setup lang="ts">
import type { Sizes } from '@/ui-kit/commonTypes';

defineProps<{
  icon?: string | boolean;
  size?: Sizes | number;
  density?: 'default' | 'comfortable' | 'compact';
}>();
</script>

<template>
  <v-btn :icon="icon" :size="size" :density="density"></v-btn>
</template>

<style scoped lang="scss"></style>
