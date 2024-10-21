<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useUsers } from './useUsers';
import { usersContext } from '../infrastructure/context';
import AppButton from '@/ui-kit/AppButton.vue';

import type { UsersRepo } from '../domain/usersRepo';
import AppHeading from '@/ui-kit/AppHeading.vue';
import AppIcon from '@/ui-kit/AppIcon.vue';
import AppIconButton from '@/ui-kit/AppIconButton.vue';

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
      <AppHeading type="h1">Users</AppHeading>
      <AppButton prepend-icon="mdi-plus" rounded="xs" @click="showCreateUser">
        Add New User
      </AppButton>
    </div>

    <div class="mt-10">
      <div v-if="!users.length">No users</div>
      <template v-else>
        <div class="users__row header">
          <span>Email</span>
          <span>Created At</span>
          <span>Updated At</span>
          <span>Role</span>
          <span></span>
        </div>
        <div v-for="user of users" :key="user.id.toString()">
          <div class="users__row align-center">
            <span>{{ user.email }}</span>
            <span>{{ user.createdAt }}</span>
            <span>{{ user.updatedAt }}</span>
            <span>{{ user.roles[0].name }}</span>
            <span class="d-flex justify-end ga-3">
              <AppIconButton
                size="large"
                icon="mdi-account-details-outline"
                density="comfortable"
                @click="showUserDetails(user.id)"
              />
              <AppIconButton
                size="large"
                icon="mdi-trash-can-outline"
                density="comfortable"
                @click="deleteUser"
              />
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
