<template>
  <div class="w-full fixed top-[29vh]">
    <div class="w-full flex justify-center">
      <ul
        class="py-2 text-sm text-gray-700 bg-white rounded-xl max-h-[40vh] overflow-y-scroll"
        aria-labelledby="dropdownDefaultButton"
      >
        <li
          v-for="(playlist, index) in playlists"
          :key="index"
          class="block px-4 py-2"
        >
          <div class="flex space-x-4" :key="index">
            <input
              type="checkbox"
              :value="playlist"
              v-model="checkedPlaylists"
            />
            <label>Playlist {{ playlist }}</label>
            <!-- <p>{{ checkedPlaylists }}</p> -->
          </div>
        </li>
        <div class="w-full flex justify-center mt-3">
          <button class="bg-black rounded-lg px-3 py-1 text-white">Add</button>
        </div>
      </ul>
    </div>
  </div>
</template>

<script setup>
const playlists = ["A", "B", "C"];
const checkedPlaylists = ref([]);
</script>

<style lang="scss" scoped></style>
