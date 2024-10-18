// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["nuxt-i18n-micro"],
  i18n: {
    includeDefaultLocaleRoute: true,
    locales: [
      {
        code: "en",
        iso: "en-EN",
      },
      {
        code: "de",
        iso: "de-DE",
      },
    ],
  },
});

