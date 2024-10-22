<script setup lang="ts">
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  },
  {
    title: 'Orders',
    disabled: true,
    href: 'orders'
  }
];
</script>

<template>
  <div>
    <AppPageHeading title="Orders" :breadcrumbs="breadcrumbs"></AppPageHeading>
    <div>Orders List in progress...</div>
  </div>
</template>

<style scoped lang="scss"></style>
