import { defineStore } from "pinia";
import { useApiFetch } from "../composables/useApiFetch";

type User = {
  id: Number;
  name: String;
  email: String;
};

type Credentials = {
  email: String;
  password: String;
};

type RegistrationInfo = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoggedIn = computed(() => !!user.value);

  async function logout() {
    await useApiFetch("/logout", { method: "POST" });
    user.value = null;
    // navigateTo("/login");
  }

  async function fetchUser() {
    const { data, error } = await useApiFetch("/api/user");
    console.log(error);
    user.value = data.value as User;
  }

  async function login(credentials: Credentials) {
    await useApiFetch("/sanctum/csrf-cookie");

    const loginResult = await useApiFetch("/login", {
      method: "POST",
      body: credentials,
    });

    const { data } = await useApiFetch("/api/user");
    user.value = data.value as User;
    console.log("login is fired", user.value);

    await fetchUser();

    return loginResult;
  }

  async function register(info: RegistrationInfo) {
    try {
      await useApiFetch("/sanctum/csrf-cookie");

      const registerResult = await useApiFetch("/register", {
        method: "POST",
        body: info,
      });

      await fetchUser();
      navigateTo("/");

      return { registerResult };
    } catch (error) {
      console.error("registration failed:", error);
      throw error;
    }
  }

  return { user, login, isLoggedIn, fetchUser, logout, register };
});
