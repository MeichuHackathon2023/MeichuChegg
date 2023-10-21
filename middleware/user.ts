import { useAuthStore } from "../stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (!auth.isLoggedIn) {
    // alert("login to access profile page");
    return navigateTo("/login", { replace: true });
  }
});
