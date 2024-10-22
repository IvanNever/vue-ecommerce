<script setup lang="ts">
type InputVariants =
  | 'filled'
  | 'underlined'
  | 'outlined'
  | 'plain'
  | 'solo'
  | 'solo-inverted'
  | 'solo-filled';

const { label, placeholder, type, variant } = defineProps<{
  modelValue?: string | number;
  label?: string;
  placeholder?: string;
  type?: string;
  variant?: InputVariants;
}>();
</script>

<template>
  <v-text-field
    :model-value="modelValue"
    :label="label"
    :placeholder="placeholder"
    :type="type"
    :variant="variant"
    @update:model-value="(value) => $emit('update:model-value', value)"
  ></v-text-field>
</template>

<style scoped lang="scss"></style>
