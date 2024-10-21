<script setup lang="ts"></script>

<template>
  <v-main class="main">
    <div class="main__wrapper">
      <slot></slot>
    </div>
  </v-main>
</template>

<style scoped lang="scss">
.main {
  &__wrapper {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
