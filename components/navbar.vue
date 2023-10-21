<script setup>
const auth = useAuthStore();
const user = auth.user;
const user_id = ref(-1);
const showSidebar = ref(true);
const emits = defineEmits(["toggleSideBar", "togglePerson"]);

const toggleSidebar = () => {
  emits("toggleSideBar");
};

const togglePerson = () => {
  navigateTo("/users/" + user_id.value);
};

onMounted(() => {
  if (auth.isLoggedIn) {
    if (user.id) user_id.value = user.id;
  }
});
</script>

<template>
  <nav class="bg-gray-500 w-screen">
    <div class="flex justify-between p-2">
      <button
        type="button"
        class="relative inline-flex items-center justify-center rounded-md p-2 bg-gray-700 text-white"
        aria-controls="mobile-menu"
        aria-expanded="false"
        @click="toggleSidebar"
      >
        <svg
          class="block h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <div>
        <div>
          <NuxtLink
            to="/search"
            class="relative flex"
            id="search-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="absolute -inset-1.5"></span>
            <img class="h-8 w-8" src="/search.svg" alt="" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <div>
          <NuxtLink
            to="/addPage"
            class="relative flex"
            id="upload-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="absolute -inset-1.5"></span>
            <img class="h-8 w-8" src="/plus.svg" alt="" />
          </NuxtLink>
        </div>
      </div>
      <div>
        <div>
          <NuxtLink
            type="button"
            class="relative flex"
            id="playlist-button"
            aria-expanded="false"
            aria-haspopup="true"
            to="/playlist"
          >
            <span class="absolute -inset-1.5"></span>
            <img class="h-8 w-8" src="/playlist.svg" alt="" />
          </NuxtLink>
        </div>
      </div>

      <!-- Profile dropdown -->
      <div class="relative ml-3">
        <div>
          <button
            type="button"
            @click="togglePerson"
            class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <img class="h-8 w-8 rounded-full" src="/person.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
