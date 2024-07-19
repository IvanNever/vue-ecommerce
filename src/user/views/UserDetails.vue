<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useUsers } from './useUsers';
import { useUser } from './useUser';

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
    <h1>User Details Page</h1>
    <div>
      {{ user }}
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
