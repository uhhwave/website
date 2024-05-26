import { md3 } from "vuetify/blueprints";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/fontaine",
    "@nuxtjs/google-fonts",
    "@nuxt/image",
    "vuetify-nuxt-module",
    "@formkit/auto-animate",
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
      link: [{ rel: "icon", type: "image/png", href: "/image.psd.png" }],
      meta: [
        { name: "description", content: "this is my website!~" },
        { name: "generator", content: "Astro.generator" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:domain", content: "uhhwavee.vercel.app" },
        { name: "twitter:theme-color", content: "#5865F2" },
        { property: "og:url", content: "https://uhhwavee.vercel.app" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: "hi~" },
        { property: "og:description", content: "this is my website!~" },
        {
          property: "og:image",
          content: "https://uhhwavee.vercel.app/image.psd.png",
        },
        { name: "twitter:title", content: "hi~" },
        { name: "twitter:description", content: "this is my website!~" },
        {
          name: "twitter:image",
          content: "https://uhhwavee.vercel.app/image.psd.png",
        },
      ],
    },
  },
});
