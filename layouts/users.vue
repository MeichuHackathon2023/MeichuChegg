<script setup>
import { useAuthStore } from "../stores/useAuthStore";

const auth = useAuthStore();
const showSideBar = ref(false);

async function handleLogout() {
  await auth.logout();
}

function toggleSideBar() {
  showSideBar.value = !showSideBar.value;
}
</script>

<template>
  <sidebar :showSideBar="showSideBar" @closeSideBar="toggleSideBar"></sidebar>
  <navbar @toggleSideBar="toggleSideBar" class="fixed bottom-0"></navbar>
  <div>
    <!-- <button v-if="auth.isLoggedIn" @click="handleLogout">Logout</button> -->

    <!-- <pre>{{ auth.user }}</pre> -->
    <ul>
      <!-- <li>
        <NuxtLink to="/auth-only">Auth only</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/guest-only">Guest only</NuxtLink>
      </li> -->
    </ul>
    <slot />
  </div>
  <!-- purpose of not letting contents smurf behind navbar -->
  <div class="w-10 h-[3rem]"></div>
</template>

<style scoped></style>
