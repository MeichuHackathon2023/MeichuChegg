import { useAuthStore } from "../stores/useAuthStore";

export default defineNuxtPlugin(async (nuxtApp) => {
  const auth = useAuthStore();
  console.log("fire at plugins of videos");
  await auth.fetchVideos();
});
