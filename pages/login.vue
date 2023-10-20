<script setup>
const form = ref({
  email: "test@example.com",
  password: "password",
});

const auth = useAuthStore();

const handleLogin = async () => {
  const { error } = await auth.login(form.value);

  console.log("data", auth.user);
  console.log("error", error);
};
</script>

<template>
  <form @submit.prevent="handleLogin">
    <label>
      Email
      <input type="email" v-model="form.email" />
    </label>
    <label>
      Password
      <input type="test" v-model="form.password" />
    </label>

    <button>Login</button>
  </form>
</template>

<style scoped></style>
