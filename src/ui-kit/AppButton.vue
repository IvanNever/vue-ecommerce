<script setup lang="ts">
import type { BorderRadius, Sizes } from '@/ui-kit/commonTypes';

defineProps<{
  prependIcon?: string;
  appendIcon?: string;
  size?: Sizes | number;
  rounded?: BorderRadius | number | boolean;
  density?: 'default' | 'comfortable' | 'compact';
}>();
</script>

<template>
  <v-btn
    :prependIcon="prependIcon"
    :appendIcon="appendIcon"
    :size="size"
    :rounded="rounded"
    :density="density"
  >
    <template v-if="!icon">
      <slot></slot>
    </template>
  </v-btn>
</template>

<style scoped lang="scss"></style>
