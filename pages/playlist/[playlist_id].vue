<template>
  <div class="p-3 flex flex-col space-y-4 w-screen">
    <h1 class="text-2xl">Playlist {{ list[playlist_id].id }}</h1>
    <iframe
      v-for="x in list[playlist_id].url"
      :key="x.id"
      class="basis-full shrink-0 aspect-video rounded-3xl"
      :src="x"
    ></iframe>
  </div>
</template>

<script setup>
const { playlist_id } = useRoute().params;

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
</script>

<style lang="scss" scoped></style>
