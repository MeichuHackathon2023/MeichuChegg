import { useAuthStore } from "../stores/useAuthStore";

export default defineNuxtRouteMiddleware((to, from) => {
  const auth = useAuthStore();

  if (auth.isLoggedIn) {
    // alert("logout to register a new account");
    return navigateTo("/", { replace: true });
  }
});
