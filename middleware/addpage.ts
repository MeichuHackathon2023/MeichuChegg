import { useAuthStore } from "../stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    // alert("login to upload your own ideas!");
    return navigateTo("/login", { replace: true });
  }
});
