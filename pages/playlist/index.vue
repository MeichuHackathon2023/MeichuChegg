<template>
  <div class="flex flex-col space-y-4 w-screen">
    <div class="p-3 border-b border-gray-500" v-for="x in list" :key="x.id">
      <div class="px-1 pb-2 flex justify-between">
        <h1 class="text-2xl">Playlist {{ x.id }}</h1>
        <button
          @click="toggleVideos(x.id)"
          class="p-1 text-sm rounded-full border border-gray-500 hover:border-spacing-2"
        >
          View all
        </button>
      </div>
      <div class="flex overflow-x-auto space-x-4">
        <iframe
          v-for="y in x.url"
          class="basis-full shrink-0 aspect-video rounded-3xl"
          :src="y"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: ["playlist"],
});
const list = [
  {
    id: 0,
    url: [
      "https://www.youtube.com/embed/UBoxs1dM9Lc?si=JoUnp2l72X5t7jrG",
      "https://www.youtube.com/embed/UBoxs1dM9Lc?si=JoUnp2l72X5t7jrG",
      "https://www.youtube.com/embed/UBoxs1dM9Lc?si=JoUnp2l72X5t7jrG",
      "https://www.youtube.com/embed/UBoxs1dM9Lc?si=JoUnp2l72X5t7jrG",
    ],
  },
  {
    id: 1,
    url: ["https://www.youtube.com/embed/oGiz5SVQyhE?si=Z2v_8YWoehcdiDZ5"],
  },
  {
    id: 2,
    url: ["https://www.youtube.com/embed/f4V7J-LYG_c?si=SNI5BghvkP95jJba"],
  },
  {
    id: 3,
    url: ["https://www.youtube.com/embed/5Eg5xvAoooM?si=C6vEkVTKwXFFrghb"],
  },
];

const toggleVideos = (id) => {
  navigateTo("/playlist/" + id);
};
</script>

<style lang="scss" scoped></style>
