<script setup>
import { definePageMeta } from "#imports";

definePageMeta({
  middleware: ["login"],
});

const form = ref({
  email: "user@example.com",
  password: "password",
});

const auth = useAuthStore();

const handleLogin = async () => {
  await auth.logout();
  const { error } = await auth.login(form.value);

  if (auth.isLoggedIn) {
    navigateTo("/", { replace: true });
  } else {
    alert("wrong id or password");
  }

  console.log("data", auth.user);
  console.log("error", error);
};

const handleLogout = async () => {
  await auth.logout();
  navigateTo("/login");
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
        Kuiz
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Switch to another account
          </h1>
          <form class="space-y-4 md:space-y-6" action="#">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
                required=""
                v-model="form.email"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
                v-model="form.password"
              />
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start"></div>
              <a
                href="#"
                class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Forgot password?</a
              >
            </div>
            <div class="flex justify-between">
              <button
                @click.stop.prevent="handleLogin"
                class="basis-[40%] text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>
              <button
                v-if="auth.isLoggedIn"
                @click.stop.prevent="handleLogout"
                class="basis-[40%] text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign out
              </button>
            </div>

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Create an account:
              <NuxtLink
                href="/register"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >Sign up</NuxtLink
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
