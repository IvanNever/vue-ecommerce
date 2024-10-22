<script setup lang="ts">
import AppHeading from '@/ui-kit/AppHeading.vue';
import AppBreadcrumbs from '@/ui-kit/AppBreadcrumbs.vue';

const { title, breadcrumbs } = defineProps<{
  title: string;
  breadcrumbs: {
    title: string;
    disabled: boolean;
    href: string;
  }[];
}>();
</script>

<template>
  <div class="d-flex align-center justify-space-between mb-8">
    <div class="d-flex align-baseline ga-10">
      <AppHeading type="h1">{{ title }}</AppHeading>
      <AppBreadcrumbs :items="breadcrumbs" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
