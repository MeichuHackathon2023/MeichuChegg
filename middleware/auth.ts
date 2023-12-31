import { useAuthStore } from "../stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    console.log("not logged in yet");
    return navigateTo("/login", { replace: true });
  }
});
