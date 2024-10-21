<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUsers } from './useUsers';
import { useUser } from './useUser';
import AppHeading from '@/ui-kit/AppHeading.vue';

const route = useRoute();
const { users } = useUsers();
const { user } = useUser();

function getUser(): void {
  const res = users.value.find((item) => item.id === Number(route.params.id));

  if (!res) return;

  user.value = res;
}

onMounted(() => {
  getUser();
});
</script>

<template>
  <div class="user">
    <AppHeading type="h1">User Details Page</AppHeading>
    <div>
      {{ user }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
