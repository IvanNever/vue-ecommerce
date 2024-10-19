<script setup lang="ts">
type IconSizes = 'x-small' | 'small' | 'large' | 'x-large';

const { icon = 'mdi-rhombus-outline' } = defineProps<{
  icon?: string;
  size?: IconSizes | string; //preset sizes or value in px
  color?: string;
}>();
</script>

<template>
  <v-icon :icon="icon" :size="size" :color="color"></v-icon>
</template>

<style scoped lang="scss"></style>
