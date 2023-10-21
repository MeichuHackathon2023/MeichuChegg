<script setup>
const auth = useAuthStore();

const user = auth.user;
</script>

<template>
  <div>Page: foo</div>
  <pre>{{ user }}</pre>
</template>

<style scoped></style>
