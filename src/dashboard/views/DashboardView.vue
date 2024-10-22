<script setup lang="ts">
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  },
  {
    title: 'Dashboard',
    disabled: true,
    href: 'dashboard'
  }
];
</script>

<template>
  <div class="dashboard">
    <AppPageHeading
      title="Dashboard"
      :breadcrumbs="breadcrumbs"
    ></AppPageHeading>
    <div class="mb-10">Dashboard in progress...</div>
  </div>
</template>

<style scoped lang="scss"></style>
