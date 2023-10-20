<script setup>
import { navigateTo } from "nuxt/app";

const form = ref({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

const auth = useAuthStore();

const handleRegister = async () => {
  const { error } = await auth.register(form.value);

  if (!error.value) {
    navigateTo("/");
  }

  console.log(error);
};
</script>

<template>
  <form @submit.prevent="handleRegister">
    <label>
      Name
      <input type="text" v-model="form.name" />
    </label>
    <label>
      Email
      <input type="email" v-model="form.email" />
    </label>
    <label>
      Password
      <input type="password" v-model="form.password" />
    </label>
    <label>
      Password confirmation
      <input type="password" v-model="form.password_confirmation" />
    </label>

    <button>Register</button>
  </form>
</template>

<style scoped></style>
