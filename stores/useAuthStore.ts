import { defineStore } from "pinia";
import { useApiFetch } from "../composables/useApiFetch";

type User = {
  id: Number;
  name: String;
  grade: String;
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
  const token = ref<String | null>(null);
  const isLoggedIn = computed(() => !!user.value);
  const videos = ref<Array<String> | null>(null);

  async function logout() {
    // await useApiFetch("/logout", { method: "POST" });
    user.value = null;
    localStorage.removeItem("token");
    // navigateTo("/login");
  }

  async function fetchVideos() {
    const { data, error } = await useApiFetch("/api/video");
    if (process.client) {
      if (data.value) {
        // console.log("at fetchUser get", data._value.data);
        console.log("at fetchVideos get", data.value.data);
        videos.value = data.value.data;
        // videos.value.push(
        //   ...data._value.data.map(({ embedLink }) => embedLink)
        // );
        console.log("at fetch Videos, videos", videos.value);
      } else {
        console.log("at fetchVideos fail", data);
      }
    }
  }

  async function fetchUser() {
    const { data, error } = await useApiFetch("/api/user/me");
    if (process.client) {
      if (data._value) {
        // console.log("at fetchUser get", data._value.data);
        console.log("at fetchUser get", data);
        user.value = data._value.data as User;
      } else {
        console.log("at fetchUser fail", data);
      }
    }
  }

  async function login(credentials: Credentials) {
    const loginResult = await useApiFetch("/api/auth/login", {
      method: "POST",
      body: credentials,
    });
    if (loginResult) {
      token.value = loginResult.data._value.data.token;
      localStorage.setItem("token", loginResult.data._value.data.token);
    } else {
      console.log("error at login", loginResult);
    }

    const { data } = await useApiFetch("/api/user/me");
    user.value = data._value.data as User;
    // user.value = data.value as User;
    console.log("at useAuth", user.value);
    return user.value;
  }

  async function register(info: RegistrationInfo) {
    try {
      // await useApiFetch("/sanctum/csrf-cookie");

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

  return {
    user,
    videos,
    token,
    login,
    isLoggedIn,
    fetchUser,
    fetchVideos,
    logout,
    register,
  };
});
