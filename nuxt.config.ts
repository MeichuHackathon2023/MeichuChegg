// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  nitro: {
    devProxy: {
      "/api/auth": {
        target: "http://192.168.149.213:8080",
        changeOrigin: true,
      },
    },
  },
  modules: [
    // ...
    "@pinia/nuxt",
  ],
});
