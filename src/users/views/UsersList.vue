<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUsers } from './useUsers';
import { usersContext } from '../infrastructure/context';
import AppButton from '@/ui-kit/AppButton.vue';

import type { UsersRepo } from '../domain/usersRepo';
import AppHeading from '@/ui-kit/AppHeading.vue';

const userRepo = usersContext.get<UsersRepo>('UsersRepository');
const { users } = useUsers();
const router = useRouter();

async function getUsers(): Promise<void> {
  try {
    users.value = await userRepo.getUsers();
  } catch (err) {
    console.log(err);
  }
}

function showCreateUser(): void {
  router.push({ name: 'user-create' });
}

function showUserDetails(id: number): void {
  router.push({ name: 'user-details', params: { id: id.toString() } });
}

function deleteUser(): void {
  console.log('delete');
}

onMounted(() => {
  if (!users.value.length) {
    getUsers();
  }
});
</script>

<template>
  <div class="users">
    <div class="d-flex align-center justify-space-between">
      <AppHeading type="h1">User List Page</AppHeading>
      <AppButton @click="showCreateUser">Create New User</AppButton>
    </div>

    <div class="mt-10">
      <div v-if="!users.length">No users</div>
      <template v-else>
        <div class="users__row header">
          <span>Email</span>
          <span>Created At</span>
          <span>Updated At</span>
          <span>Role</span>
          <span>Actions</span>
        </div>
        <div v-for="user of users" :key="user.id.toString()">
          <div class="users__row">
            <span>{{ user.email }}</span>
            <span>{{ user.createdAt }}</span>
            <span>{{ user.updatedAt }}</span>
            <span>{{ user.roles[0].name }}</span>
            <span>
              <span class="users__action" @click="showUserDetails(user.id)"
                >Details</span
              >
              <span class="users__action" @click="deleteUser">Delete</span>
            </span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
.users {
  &__row {
    display: grid;
    grid-template-columns: 1fr repeat(2, 2fr) 1fr 1fr;
    gap: 2rem;
    margin-bottom: 0.5rem;
    &.header {
      font-weight: bold;
      margin-bottom: 1rem;
    }
  }
  &__action {
    margin-right: 1rem;
    cursor: pointer;
  }
}
</style>
