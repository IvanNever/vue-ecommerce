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
  <div
    class="d-flex flex-wrap align-center justify-space-between mb-6 mb-md-8 ga-4"
  >
    <div
      class="d-flex flex-column-reverse flex-md-row align-baseline ga-2 ga-md-10"
    >
      <AppHeading type="h1">{{ title }}</AppHeading>
      <AppBreadcrumbs :items="breadcrumbs" />
    </div>
    <div class="align-self-end align-self-md-center">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
