import { useAuthStore } from "../stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (auth.isLoggedIn && to.href == "/login") {
    return navigateTo("/switch", { replace: true });
  }
});
