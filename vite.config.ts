import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import type { Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Preview from "vite-plugin-vue-component-preview";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), Preview() as Plugin],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
