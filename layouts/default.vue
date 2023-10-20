<script lang="ts" setup>
import { useAuthStore } from "../stores/useAuthStore";

const auth = useAuthStore();

async function handleLogout() {
  await auth.logout();
}
</script>

<template>
  <navbar class="fixed bottom-0"></navbar>
  <div>
    <button v-if="auth.isLoggedIn" @click="handleLogout">Logout</button>

    <pre>{{ auth.user }}</pre>
    <ul>
      <li>
        <NuxtLink to="/">
          <h1 class="cursor-pointer text-red-300">Home</h1>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/register">Register</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/login">Login</NuxtLink>
      </li>
      <!-- <li>
        <NuxtLink to="/auth-only">Auth only</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/guest-only">Guest only</NuxtLink>
      </li> -->
    </ul>
    <slot />
  </div>
</template>

<style scoped></style>
