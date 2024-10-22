<script setup lang="ts">
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  },
  {
    title: 'Products',
    disabled: true,
    href: 'products'
  }
];
</script>

<template>
  <div>
    <AppPageHeading
      title="Products"
      :breadcrumbs="breadcrumbs"
    ></AppPageHeading>
    <div>Products List in progress...</div>
  </div>
</template>

<style scoped lang="scss"></style>
