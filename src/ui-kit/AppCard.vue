<script setup lang="ts">
const { width } = defineProps<{
  width?: number | string;
}>();
</script>

<template>
  <v-card :width="width">
    <slot></slot>
  </v-card>
</template>

<style scoped lang="scss"></style>
