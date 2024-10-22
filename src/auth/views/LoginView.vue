<script setup lang="ts">
import { ref } from 'vue';
import AppHeading from '@/ui-kit/AppHeading.vue';
import AppCard from '@/ui-kit/AppCard.vue';
import AppInput from '@/ui-kit/AppInput.vue';
import AppForm from '@/ui-kit/AppForm.vue';
import AppButton from '@/ui-kit/AppButton.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref<string>('test@mail.com');
function handleEmailUpdate(value: string) {
  email.value = value;
}

const password = ref<string>('12345');
function handlePasswordUpdate(value: string) {
  password.value = value;
}

function handleSubmit() {
  router.push({ name: 'home' });
}
</script>

<template>
  <div
    class="d-flex flex-column align-center justify-center ma-auto h-100 ga-8 px-6 w-100 w-md-50 w-xl-33"
  >
    <div class="logo">VueMart</div>
    <AppHeading class="text-center" type="h1">
      Log in to your account
    </AppHeading>
    <AppCard class="w-100 pa-6 pa-md-10 bg-white mt-4">
      <AppForm
        class="d-flex flex-column align-center ga-2 ga-md-6"
        @submit="handleSubmit"
      >
        <AppInput
          :modelValue="email"
          class="w-100"
          label="E-mail"
          placeholder="Email address..."
          type="email"
          variant="outlined"
          autocomplete="email"
          @update:model-value="handleEmailUpdate"
        />
        <AppInput
          :modelValue="password"
          class="w-100"
          label="Password"
          placeholder="Password..."
          type="password"
          variant="outlined"
          autocomplete="current-password"
          @update:model-value="handlePasswordUpdate"
        />
        <AppButton
          class="w-md-50 w-100"
          color="indigo-accent-3"
          size="large"
          type="submit"
        >
          Log in
        </AppButton>
      </AppForm>
    </AppCard>
  </div>
</template>

<style scoped lang="scss">
.logo {
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
}
</style>
