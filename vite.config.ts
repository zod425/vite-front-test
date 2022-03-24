import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Icons from "unplugin-icons/vite";
// @ts-ignore
import Components from "unplugin-vue-components/vite";

const pathSrc = path.resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
  plugins: [
    vue(),
    Components({
    }),
    Icons({
      defaultStyle: "display:inline-block",
    }),
  ],
  server: {
    host: true,
    proxy: {
      "/api": {
        target: "http://localhost:9010",
      },
    },
    port: 8888,
  },
});
