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
  <navbar @toggleSideBar="toggleSideBar" class="fixed bottom-0 z-10"></navbar>
  <div class="flex flex-col w-full h-screen">
    <slot />
    <!-- purpose of not letting contents smurf behind navbar -->
    <div class="w-10 h-[3.7rem]"></div>
  </div>
</template>

<style scoped></style>
