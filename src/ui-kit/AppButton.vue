<script setup lang="ts">
import type { BorderRadius, Sizes } from '@/ui-kit/commonTypes';

const {
  prependIcon,
  appendIcon,
  rounded = 'xs',
  size,
  density
} = defineProps<{
  prependIcon?: string;
  appendIcon?: string;
  rounded?: BorderRadius;
  size?: Sizes | number;
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
    <slot></slot>
  </v-btn>
</template>

<style scoped lang="scss"></style>
