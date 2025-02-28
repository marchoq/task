export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@pinia/nuxt", "nuxt-svgo", "@nuxtjs/tailwindcss"],
  tailwindcss: {
    configPath: "./tailwind.config.js",
    exposeConfig: true,
    viewer: true,
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  app: {
    head: {
      title: "Airbaltic",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description", // @todo: ko šeit?
          name: "description", // @todo: ko šeit?
          content: "My Nuxt Application Description", // @todo: ko šeit?
        },
      ],
    },
  },
  components: true,
  plugins: ["~/plugins/fonts.js"],
});
