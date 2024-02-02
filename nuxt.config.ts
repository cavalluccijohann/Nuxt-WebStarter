export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
    private: {},
  },
  css: ["~/assets/style/main.scss"],
  colorMode: {
    preference: "light",
    fallback: "light",
    storageKey: "nuxt-starter-color-mode",
  },
  devtools: { enabled: true },
  modules: [
    'blanked'
  ]
})
