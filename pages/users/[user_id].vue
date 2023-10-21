<template>
  <div class="p-3">
    <div class="flex justify-around">
      <div class="basis-[40%] p-2">
        <img src="/person.svg" alt="" />
      </div>
      <div class="flex flex-col justify-center">
        <!-- <h2 class="text-3xl">{{ user.name }}</h2> -->
        <p>user: {{ user_id }}</p>
        <button @click="test">test</button>
        <p>{{ name }}</p>
      </div>
    </div>
    <div class="mt-10 pt-2 border-t border-gray-600 dark:border-gray-900">
      <h1 class="text-3xl">My Videos</h1>
    </div>
    <div id="uploadVideos" class="flex overflow-x-auto py-3">
      <div class="w-[45%] shrink-0 h-10 bg-red-600"></div>
      <div class="w-[45%] shrink-0 h-10 bg-blue-400"></div>
      <div class="w-[45%] shrink-0 h-10 bg-green-300"></div>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: ["user"],
});

const auth = useAuthStore();

const user = auth.user;
const name = ref("");
// const email = user.email;
const { user_id } = useRoute().params;

onMounted(() => {
  name.value = user.name;
});
</script>

<style scoped></style>
