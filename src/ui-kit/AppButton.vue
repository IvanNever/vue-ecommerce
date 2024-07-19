<script setup lang="ts"></script>

<template>
  <button class="button">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  height: 2rem;
  cursor: pointer;
}
</style>
