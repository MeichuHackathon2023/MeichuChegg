<script setup>
import { navigateTo } from "nuxt/app";
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: ["addPage"],
});

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const showBar = ref(false);
const checkedTags = ref([]);
const tags = ["Math", "Mandarian", "English", "Science", "Electronics"];

const auth = useAuthStore();

const handleRegister = async () => {
  const { error } = await auth.register(form.value);

  if (!error) {
    navigateTo("/");
  }
};

const toggleTagBar = () => {
  showBar.value = !showBar.value;
};
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <a
        href="#"
        class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img class="w-8 h-8 mr-2" src="/bulb.svg" alt="logo" />
        Upload video
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Title</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="title"
                required=""
                v-model="form.name"
              />
            </div>
            <div class="relative w-full">
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Tags</label
              >
              <button
                @click="toggleTagBar"
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                class="w-full flex justify-end text-white bg-gray-50 border border-gray-300 hover:bg-grey-200 focus:ring-2 font-medium rounded-lg text-sm px-5 py-2.5"
                type="button"
              >
                <svg
                  class="w-2.5 h-2.5 ml-2.5 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <div
                v-if="showBar"
                id="dropdown"
                class="absolute top-15 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full max-h-28 overflow-y-auto"
              >
                <ul
                  class="py-2 text-sm text-gray-700"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li
                    v-for="(tag, index) in tags"
                    :key="index"
                    class="block px-4 py-2"
                  >
                    <!-- <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600"
                      >{{ tag }}</a
                    > -->
                    <div class="flex space-x-4" :key="index">
                      <input
                        type="checkbox"
                        :value="tag"
                        v-model="checkedTags"
                      />
                      <label>{{ tag }}</label>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <label
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Description</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="description"
                required=""
                v-model="form.name"
              />
            </div>

            <!-- Dropdown menu -->
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900"
                >File</label
              >
              <input
                type="file"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <button
              @click.stop.prevent="handleUpload"
              class="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              UPLOAD
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
