import { md3 } from "vuetify/blueprints";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-16',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "vuetify-nuxt-module",
    "nuxt-purgecss"
  ],
  googleFonts: {
    download: true,
    families: {
      Inter: "200..700",
    },
  },
  vuetify: {
    vuetifyOptions: {
      blueprint: md3,
      theme: {
        defaultTheme: "dark",
      },
    },
  },
  fontMetrics: {
    fonts: ["Inter"],
  },
  app: {
    head: {
      title: "hi~",
      charset: "UTF-8",
      viewport: "width=device-width",
      link: [{ rel: "icon", type: "image/png", href: "/goldr.jpeg" }],
      meta: [
        { name: "description", content: "this is my website!~" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:domain", content: "wavee.space" },
        { name: "twitter:theme-color", content: "#201a1b" },
        { property: "og:url", content: "https://wavee.space" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "hi~" },
        { property: "og:description", content: "this is my website!~" },
        {
          property: "og:image",
          content: "https://wavee.space/goldr.jpeg",
        },
        { name: "twitter:title", content: "hi~" },
        { name: "twitter:description", content: "this is my website!~" },
        {
          name: "twitter:image",
          content: "https://wavee.space/goldr.jpeg",
        },
      ],
    },
  },
});