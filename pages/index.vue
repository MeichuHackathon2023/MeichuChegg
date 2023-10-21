<script setup>
const auth = useAuthStore();
definePageMeta({
  layout: "home",
});

const user = auth.user;
const section2 = ref(null);

const test = () => {
  section2.value?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <!-- <pre>{{ user }}</pre> -->
  <button class="z-10 bg-red-500" @click="test">TEST</button>
  <section ref="section1" class="relative w-full h-[100vh]">
    <iframe
      class="w-full h-[95vh]"
      src="https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
  </section>
  <section ref="section2" class="relative w-full h-screen">
    <iframe
      class="w-full h-[95vh]"
      src="https://youtube.com/embed/hfjKe3g7fDc?si=sqM-RgxLaiwvVUzT"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    >
    </iframe>
  </section>
</template>

<style scoped></style>
