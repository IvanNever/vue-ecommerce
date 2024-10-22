<script setup lang="ts">
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  },
  {
    title: 'Categories',
    disabled: true,
    href: 'categories'
  }
];
</script>

<template>
  <div>
    <AppPageHeading
      title="Categories"
      :breadcrumbs="breadcrumbs"
    ></AppPageHeading>
    <div>Categories List in progress...</div>
  </div>
</template>

<style scoped lang="scss"></style>
