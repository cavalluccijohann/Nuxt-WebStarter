export default defineNuxtConfig({
  runtimeConfig: {
    public: {},
    private: {},
  },
  modules: [
    'blanked',
    "nuxt-svgo"
  ],
  css: ["~/assets/style/main.scss"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    storageKey: "nuxt-starter-color-mode",
  },
  devtools: {
    enabled: true
  },
  svgo: {
    autoImportPath: "./assets/logo/",
  },
})
