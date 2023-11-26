import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

//import cloudflare from "@astrojs/cloudflare";
import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: deno()
});