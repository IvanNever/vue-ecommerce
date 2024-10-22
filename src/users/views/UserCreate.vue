<script setup lang="ts">
import AppHeading from '@/ui-kit/AppHeading.vue';
import AppPageHeading from '@/ui-kit/AppPageHeading.vue';
import AppButton from '@/ui-kit/AppButton.vue';

const breadcrumbs = [
  {
    title: 'Home',
    disabled: false,
    href: 'home'
  },
  {
    title: 'Users',
    disabled: false,
    href: 'users'
  },
  {
    title: `Create User`,
    disabled: true,
    href: 'user-details'
  }
];
</script>

<template>
  <AppPageHeading title="Create New User Page" :breadcrumbs="breadcrumbs">
    <AppButton prepend-icon="mdi-plus">Add User</AppButton>
  </AppPageHeading>
  <div>Create User Form in progress...</div>
</template>

<style scoped></style>
