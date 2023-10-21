<script setup>
import { useAuthStore } from "../stores/useAuthStore";

const auth = useAuthStore();
const user = ref();
const showSideBar = ref(false);

async function handleLogout() {
  await auth.logout();
}

function toggleSideBar() {
  showSideBar.value = !showSideBar.value;
}

onMounted(() => {
  console.log(auth.isLoggedIn, auth.user);
});
</script>

<template>
  <sidebar :showSideBar="showSideBar" @closeSideBar="toggleSideBar"></sidebar>
  <navbar @toggleSideBar="toggleSideBar" class="fixed bottom-0"></navbar>
  <div>
    <!-- <pre>{{ auth.user }}</pre> -->
    <slot />
  </div>
  <!-- purpose of not letting contents smurf behind navbar -->
  <div class="w-10 h-[3rem]"></div>
</template>

<style scoped></style>
